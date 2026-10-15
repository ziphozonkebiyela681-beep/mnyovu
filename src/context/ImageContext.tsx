import React, { createContext, useContext, useState, useEffect } from 'react';

interface ImageContextType {
  logoUrl: string;
  workplaceUrl: string;
  priceListUrl: string;
  beforeBootUrl: string;
  afterBootUrl: string;
  updateImage: (
    type: 'logo' | 'workplace' | 'priceList' | 'beforeBoot' | 'afterBoot',
    file: File
  ) => Promise<void>;
  swapBootImages: () => void;
  resetImages: () => void;
  isCustomLogo: boolean;
  isCustomWorkplace: boolean;
  isCustomPriceList: boolean;
  isCustomBeforeBoot: boolean;
  isCustomAfterBoot: boolean;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logoUrl, setLogoUrl] = useState<string>('/logo.jpg');
  const [workplaceUrl, setWorkplaceUrl] = useState<string>('/mnyovu_workplace.jpg');
  const [priceListUrl, setPriceListUrl] = useState<string>('/price_list_poster.jpg');
  const [beforeBootUrl, setBeforeBootUrl] = useState<string>('/boot_before.jpg');
  const [afterBootUrl, setAfterBootUrl] = useState<string>('/boot_after.jpg');

  const [isCustomLogo, setIsCustomLogo] = useState<boolean>(false);
  const [isCustomWorkplace, setIsCustomWorkplace] = useState<boolean>(false);
  const [isCustomPriceList, setIsCustomPriceList] = useState<boolean>(false);
  const [isCustomBeforeBoot, setIsCustomBeforeBoot] = useState<boolean>(false);
  const [isCustomAfterBoot, setIsCustomAfterBoot] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage on mount
    const savedLogo = localStorage.getItem('mnyovu_custom_logo');
    if (savedLogo) {
      setLogoUrl(savedLogo);
      setIsCustomLogo(true);
    }
    const savedWorkplace = localStorage.getItem('mnyovu_custom_workplace');
    if (savedWorkplace) {
      setWorkplaceUrl(savedWorkplace);
      setIsCustomWorkplace(true);
    }
    const savedPriceList = localStorage.getItem('mnyovu_custom_price_list');
    if (savedPriceList) {
      setPriceListUrl(savedPriceList);
      setIsCustomPriceList(true);
    }
    const savedBefore = localStorage.getItem('mnyovu_custom_before_boot');
    if (savedBefore) {
      setBeforeBootUrl(savedBefore);
      setIsCustomBeforeBoot(true);
    }
    const savedAfter = localStorage.getItem('mnyovu_custom_after_boot');
    if (savedAfter) {
      setAfterBootUrl(savedAfter);
      setIsCustomAfterBoot(true);
    }
  }, []);

  const updateImage = async (
    type: 'logo' | 'workplace' | 'priceList' | 'beforeBoot' | 'afterBoot',
    file: File
  ) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result as string;
        let filename = '';
        let storageKey = '';

        if (type === 'logo') {
          filename = 'logo.jpg';
          storageKey = 'mnyovu_custom_logo';
          setLogoUrl(base64);
          setIsCustomLogo(true);
        } else if (type === 'workplace') {
          filename = 'mnyovu_workplace.jpg';
          storageKey = 'mnyovu_custom_workplace';
          setWorkplaceUrl(base64);
          setIsCustomWorkplace(true);
        } else if (type === 'priceList') {
          filename = 'price_list_poster.jpg';
          storageKey = 'mnyovu_custom_price_list';
          setPriceListUrl(base64);
          setIsCustomPriceList(true);
        } else if (type === 'beforeBoot') {
          filename = 'boot_before.jpg';
          storageKey = 'mnyovu_custom_before_boot';
          setBeforeBootUrl(base64);
          setIsCustomBeforeBoot(true);
        } else if (type === 'afterBoot') {
          filename = 'boot_after.jpg';
          storageKey = 'mnyovu_custom_after_boot';
          setAfterBootUrl(base64);
          setIsCustomAfterBoot(true);
        }

        try {
          localStorage.setItem(storageKey, base64);
        } catch (e) {
          console.warn('Storage quota exceeded, state updated in memory', e);
        }

        // Also post to server to save permanently on disk
        try {
          await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename, base64 }),
          });
        } catch (err) {
          console.error('Failed to write to disk, using client storage:', err);
        }

        resolve();
      };
      reader.onerror = () => reject(new Error('Failed to read image file'));
      reader.readAsDataURL(file);
    });
  };

  const swapBootImages = () => {
    const temp = beforeBootUrl;
    setBeforeBootUrl(afterBootUrl);
    setAfterBootUrl(temp);

    try {
      localStorage.setItem('mnyovu_custom_before_boot', afterBootUrl);
      localStorage.setItem('mnyovu_custom_after_boot', temp);
    } catch (e) {
      console.warn('Failed to persist swapped boot images', e);
    }
  };

  const resetImages = () => {
    localStorage.removeItem('mnyovu_custom_logo');
    localStorage.removeItem('mnyovu_custom_workplace');
    localStorage.removeItem('mnyovu_custom_price_list');
    localStorage.removeItem('mnyovu_custom_before_boot');
    localStorage.removeItem('mnyovu_custom_after_boot');
    setLogoUrl('/logo.jpg');
    setWorkplaceUrl('/mnyovu_workplace.jpg');
    setPriceListUrl('/price_list_poster.jpg');
    setBeforeBootUrl('/boot_before.jpg');
    setAfterBootUrl('/boot_after.jpg');
    setIsCustomLogo(false);
    setIsCustomWorkplace(false);
    setIsCustomPriceList(false);
    setIsCustomBeforeBoot(false);
    setIsCustomAfterBoot(false);
  };

  return (
    <ImageContext.Provider
      value={{
        logoUrl,
        workplaceUrl,
        priceListUrl,
        beforeBootUrl,
        afterBootUrl,
        updateImage,
        swapBootImages,
        resetImages,
        isCustomLogo,
        isCustomWorkplace,
        isCustomPriceList,
        isCustomBeforeBoot,
        isCustomAfterBoot,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useAppImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useAppImages must be used within an ImageProvider');
  }
  return context;
};
