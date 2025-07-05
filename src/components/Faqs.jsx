import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Faqs = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="py-6">
      <div className="md:max-w-[80%] p-2 mx-auto flex flex-col justify-center items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[2px] bg-yellow-600" />
          <p>FAQs</p>
        </div>
        <p className="text-2xl pb-4 font-medium">
          Questions? <span className="text-[#224A26]">Look here.</span>
        </p>
        <ul className="md:w-[60%] flex flex-col gap-2">
          <li className="flex p-3 rounded-xl border-gray-200 shadow-md border justify-between items-center">
            <div className="flex flex-col gap-3">
              <p>What types of furniture do you offer?</p>
              <p className="hidden">
                We offer a wide range of furniture for every space in your home
                or office — including sofas, beds, dining tables, chairs,
                wardrobes, coffee tables, storage units, work desks, and more.
                Our collection includes modern, classic, and custom designs to
                suit your style.
              </p>
            </div>
            {!isVisible && <FontAwesomeIcon icon={faPlus} />}
            {isVisible && <FontAwesomeIcon icon={faMinus} />}
          </li>
          <li className="flex p-3 rounded-xl border-gray-200 shadow-md border justify-between items-center">
            <div className="flex flex-col gap-3">
              <p>What payment methods do you accept?</p>
              <p className="hidden">
                We accept all major payment methods including credit/debit cards
                (Visa, Mastercard, RuPay), UPI, net banking, and wallet
                payments. We also offer easy EMI options on select purchases.
              </p>
            </div>
            {!isVisible && <FontAwesomeIcon icon={faPlus} />}
            {isVisible && <FontAwesomeIcon icon={faMinus} />}
          </li>
          <li className="flex p-3 rounded-xl border-gray-200 shadow-md border justify-between items-center">
            <div className="flex flex-col gap-3">
              <p>Can I track my furniture delivery?</p>
              <p className="hidden">
                Yes, once your order is shipped, you’ll receive a tracking link
                via email or SMS. You can use it to monitor the status and
                estimated delivery time of your order in real-time.
              </p>
            </div>
            {!isVisible && <FontAwesomeIcon icon={faPlus} />}
            {isVisible && <FontAwesomeIcon icon={faMinus} />}
          </li>
          <li className="flex p-3 rounded-xl border-gray-200 shadow-md border justify-between items-center">
            <div className="flex flex-col gap-3">
              <p>What is your return policy?</p>
              <p className="hidden">
                We offer a 7-day return window for eligible products. If the
                item is damaged, defective, or doesn’t match your order, we’ll
                arrange a free pickup and issue a full refund or replacement.
                Please refer to our full return policy for more details.
              </p>
            </div>
            {!isVisible && <FontAwesomeIcon icon={faPlus} />}
            {isVisible && <FontAwesomeIcon icon={faMinus} />}
          </li>
          <li className="flex p-3 rounded-xl border-gray-200 shadow-md border justify-between items-center">
            <div className="flex flex-col gap-3">
              <p>What materials are used in your furniture?</p>
              <p className="hidden">
                We use premium materials such as solid wood, engineered wood,
                high-grade plywood, metal, and durable fabrics or leatherette.
                Each product listing includes detailed material specifications
                for transparency and assurance.
              </p>
            </div>
            {!isVisible && <FontAwesomeIcon icon={faPlus} />}
            {isVisible && <FontAwesomeIcon icon={faMinus} />}
          </li>
          <li className="flex p-3 rounded-xl border-gray-200 shadow-md border justify-between items-center">
            <div className="flex flex-col gap-3">
              <p>Are there any discounts or promotions available?</p>
              <p className="hidden">
                Yes! We regularly offer seasonal sales, combo deals, and
                limited-time discounts. Be sure to check our homepage, sign up
                for our newsletter, or follow us on social media to stay updated
                on current promotions.
              </p>
            </div>
            {!isVisible && <FontAwesomeIcon icon={faPlus} />}
            {isVisible && <FontAwesomeIcon icon={faMinus} />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Faqs;
