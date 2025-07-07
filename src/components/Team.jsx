import React from "react";
import { team } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGit,
  faGitAlt,
  faInstagram,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEarth,
  faGlobe,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
const Team = () => {
  return (
    <div className="py-6 bg-[#2f1893]">
      <div className="mx-auto max-w-[80%]">
        <h1 className="font-bold text-2xl pb-4 text-white">Startup Crew</h1>
        <p className="text-white text-lg">
          The most important part of the Startup Framework is the samples. The
          samples form a set of 25 usable pages you can use as is or you can add
          new blocks from UI kit.
        </p>
        <div className="flex flex-wrap gap-6 mt-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white hover:scale-101 transition-all duration-500 cursor-pointer md:w-[25vw] w-full p-4 rounded-xl shadow text-center"
            >
              <div
                className="w-32 h-32 min-w-32 min-h-32 bg-cover bg-center rounded-full border mx-auto"
                style={{ backgroundImage: `url(${member.img})` }}
              ></div>
              <h3 className="mt-4 font-bold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <div className="flex justify-center gap-4 mt-3 text-[#2f1893] text-xl">
                {(member.links ?? []).map((icon, i) => (
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={icon}
                    key={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
