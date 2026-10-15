export interface ServiceItem {
  id: string;
  name: string;
  category: 'standard' | 'deep' | 'restoration' | 'specialty';
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  recommendedFor: string;
}

export interface TrackingStep {
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  timestamp?: string;
}

export interface TrackingOrder {
  orderId: string;
  customerName: string;
  sneakers: string;
  serviceName: string;
  dropOffDate: string;
  estimatedReady: string;
  currentStepIndex: number;
  steps: TrackingStep[];
}

export interface ReviewItem {
  id: string;
  author: string;
  area: string;
  rating: number;
  comment: string;
  sneakersCleaned: string;
  date: string;
}
