



import { useSearchParams } from "react-router-dom";
import BookingForm from "../Components/BookingForm";
import "../styles/booking.css";

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const service = searchParams.get("service");

  return (
    <>
     

      <BookingForm service={service} />
    </>
  );
};

export default BookingPage;
