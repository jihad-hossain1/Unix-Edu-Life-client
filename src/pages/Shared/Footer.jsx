import React from "react";
import Container from "../../components/Container/Container";

const Footer = () => {
  return (
    <div className="bg-neutral-800 py-8 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ul>
            <li>
              <p className="break-all">
                H#000 (0th Floor), Road #00, <br /> New DOHS, Mohakhali, Dhaka,
                Bangladesh
              </p>
            </li>
          </ul>
          <ul>
            <li className="pb-3 font-semibold">Company</li>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-gray-200 hover:border-b hover:border-transparent">
                About
              </li>
              <li className="cursor-pointer hover:text-gray-200 hover:border-b hover:border-transparent">
                project
              </li>
              <li className="cursor-pointer hover:text-gray-200 hover:border-b hover:border-transparent">
                Our Team
              </li>
              <li className="cursor-pointer hover:text-gray-200 hover:border-b hover:border-transparent">
                Team Conditions
              </li>
              <li className="cursor-pointer hover:text-gray-200 hover:border-b hover:border-transparent">
                Submit Listing
              </li>
            </ul>
          </ul>
          <ul>
            <li className="pb-3 font-semibold">Quick Links</li>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-gray-200 hover:border-b hover:border-transparent">
                Quick Links
              </li>
              <li className="cursor-pointer hover:text-gray-200 hover:border-b hover:border-transparent">
                Rentals
              </li>
              <li className="cursor-pointer hover:text-gray-200 hover:border-b hover:border-transparent">
                Sales
              </li>
              <li className="cursor-pointer hover:text-gray-200 hover:border-b hover:border-transparent">
                Contact
              </li>
              <li className="cursor-pointer hover:text-gray-200 hover:border-b hover:border-transparent">
                Our Blog
              </li>
            </ul>
          </ul>
          <div>
            <ul>
              <li className="pb-3 font-semibold">Quick Links</li>
            </ul>
            <p className="break-all">
              lorem sit amet consectetur adipisicing <br /> elit. Inventore
              voluptatum ut ullam! <br /> Debitis iusto, excepturi ullam,
              aperiam <br />
              maxime, eos sit aut dolore ad saepe <br /> laudantium libero
              provident animi explicabo vero!
            </p>
            <ul className="flex gap-2 font-semibold pt-2">
              <li className="rounded px-4 bg-white text-sky-500 py-2 cursor-pointer hover:shadow">
                F
              </li>
              <li className="rounded px-4 bg-white text-sky-500 py-2 cursor-pointer hover:shadow">
                Inst
              </li>
              <li className="rounded px-4 bg-white text-sky-500 py-2 cursor-pointer hover:shadow">
                in
              </li>
              <li className="rounded px-4 bg-white text-sky-500 py-2 cursor-pointer hover:shadow">
                YT
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
