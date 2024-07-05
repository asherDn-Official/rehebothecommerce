import { useEffect, useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import StarsIcon from "@mui/icons-material/Stars";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpIcon from "@mui/icons-material/Help";
import paymentMethods from "../../../assets/images/payment-methods.svg";
import { useLocation } from "react-router-dom";

const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
        redirect: "/privacyPolicyPage",
      },
      {
        name: "About Us",
        redirect: "",
      },
    ],
  },
  {
    title: "help",
    links: [
      {
        name: "Payments",
        redirect: "",
      },
      {
        name: "Shipping",
        redirect: "",
      },
    ],
  },
  {
    title: "policy",
    links: [
      {
        name: "Privacy Policy",
        redirect: "/privacypolicy",
      },
      {
        name: "Cancellataion Policy",
        redirect: "/cancellationPolicy",
      },
    ],
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "",
      },
      {
        name: "Twitter",
        redirect: "",
      },
      {
        name: "YouTube",
        redirect: "",
      },
    ],
  },
];

const Footer = () => {
  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"));
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-5 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row justify-center items-center overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">
              {footerLinks.map((el, i) => (
                <div
                  className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5"
                  key={i}
                >
                  <h2
                    id="manbduwhrh34u4"
                    className="text-primary-grey mb-2 uppercase font-size-lg"
                  >
                    {el.title}
                  </h2>
                  {el.links.map((item, i) => (
                    <a
                      id="footerDarak"
                      href={item.redirect}
                      rel="noreferrer"
                      className="hover:underline"
                      key={i}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </footer>
          {/* <!-- footer ends --> */}
        </>
      )}
    </>
  );
};

export default Footer;
