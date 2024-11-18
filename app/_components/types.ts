import { DateRange } from "react-day-picker";
import { CarInterface } from "../_models/car/types";
import { settingInterface } from "../_models/setting/types";
import { User } from "next-auth";
import { UserInterface } from "../_models/user/types";

export interface customerReviews {
  name: string;
  comment: string;
  rating: number;
}

export interface Car {
  _id: string;
  name: string;
  maxCapacity: number;
  dailyPrice: number;
  discount: number;
  image: string;
  available: boolean;
  description: string;
  customerReviews: customerReviews[];
  engine: {
    type: string;
    horsepower: number;
    torque: string;
  };
  features: {
    transmission: string;
    infotainment: string;
    safety: string[];
    autonomyLevel: string;
  };
  performance: {
    acceleration: string;
    topSpeed: string;
    fuelType: string;
  };
}

export interface CarCardProps {
  car: Car;
}

export interface ReservationCardProps {
  booking: {
    id: number;
    customerId: number;
    startDate: string;
    endDate: string;
    numDays: number;
    totalPrice: number;
    car: Car;
    status: string;
    created_at: string;
  };
}

export interface DeleteReservationProps {
  bookingId: number;
}

export interface SelectCountryProps {
  defaultCountry?: string;
  name: string;
  id: string;
  className: string;
}

export interface carListProps {
  capacity: "large" | "small" | "medium";
}

export interface carDetailProps {
  car: CarInterface;
}

export interface DateSelectorProps {
  setting: settingInterface;
}

export interface ReservationContextType {
  range: DateRange | undefined;
  setRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  resetRange: () => void;
}

export interface ReservationFormProps {
  user: User;
}

export interface UpdateProfileFormProps {
  children: React.ReactNode;
  user: UserInterface;
}
