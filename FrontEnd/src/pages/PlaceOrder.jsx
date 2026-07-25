import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import "../CSS/PlaceOrder.css";
import TotalCartAmount from "../Components/TotalCartAmount";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../contexts/shopContext";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  phone: "",
};

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { navigate } = useContext(ShopContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // هنا مكان الـ API call الفعلي لإرسال الأوردر
      // await placeOrder({ ...formData, paymentMethod: method });

      navigate("/orders");
    } catch (error) {
      console.error("Failed to place order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="place-order-contianer" onSubmit={handleSubmit}>
      <section className="place-order-left-side">
        <Title text1={"Delivry"} text2={"Information"} />

        <div className="input-row">
          <div className="input-field">
            <label htmlFor="firstName" className="sr-only">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName" className="sr-only">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-field">
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="street" className="sr-only">
            Street
          </label>
          <input
            id="street"
            name="street"
            type="text"
            autoComplete="street-address"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
          />
        </div>

        <div className="input-row">
          <div className="input-field">
            <label htmlFor="city" className="sr-only">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="state" className="sr-only">
              State
            </label>
            <input
              id="state"
              name="state"
              type="text"
              autoComplete="address-level1"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-field">
            <label htmlFor="zipCode" className="sr-only">
              ZipCode
            </label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="ZipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              autoComplete="country-name"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-field">
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            pattern="[0-9+ ]*"
            autoComplete="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </section>

      <section className="palce-order-right-side">
        <div className="cart-total-wrapper">
          <TotalCartAmount />
        </div>

        <fieldset className="payment-section">
          <legend className="sr-only">Payment Method</legend>

          <label className="payment-method">
            <input
              type="radio"
              name="payment"
              value="strip"
              checked={method === "strip"}
              onChange={() => setMethod("strip")}
              className="payment-radio"
            />
            <img
              src={assets.stripe_logo}
              alt="Stripe"
              className="payment-logo payment-logo-stripe"
            />
          </label>

          <label className="payment-method">
            <input
              type="radio"
              name="payment"
              value="razorpay"
              checked={method === "razorpay"}
              onChange={() => setMethod("razorpay")}
              className="payment-radio"
            />
            <img
              src={assets.razorpay_logo}
              alt="Razorpay"
              className="payment-logo payment-logo-razorpay"
            />
          </label>

          <label className="payment-method">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={method === "cod"}
              onChange={() => setMethod("cod")}
              className="payment-radio"
            />
            <span className="payment-text">CASH ON DELIVERY</span>
          </label>
        </fieldset>

        <button
          type="submit"
          className="proceed-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "PLACING ORDER..." : "PLACE ORDER"}
        </button>
      </section>
    </form>
  );
};

export default PlaceOrder;
