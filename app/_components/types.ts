interface Car {
  id: number;
  name: string;
  maxCapacity: number;
  dailyPrice: number;
  discount: number;
  image: string;
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
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
}
