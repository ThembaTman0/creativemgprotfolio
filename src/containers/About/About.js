import Glass from "@/components/Glass/Glass";
import { Navigation } from "@/components/Nav/Nav";
import { ArrowLeft } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <>
      <Navigation />
      <Glass>
        <div className="pt-[6%] p-32">
          <h1 className="text-center font-semibold text-3xl p-4">About Us</h1>
          <div className="about-container text-center bg-opacity-25 backdrop-blur-md bg-gradient-to-tr from-transparent via-[rgba(61,61,61,0.01)] to-transparent p-4 rounded-lg border border-opacity-25 border-gray-400">
            <p className="p-4">
              Welcome to Creative Minds Graphics (Pty) Ltd - your creative
              partner in the digital world. Our journey began with a simple yet
              powerful idea: to transform imagination into visually captivating
              designs that leave a lasting impact. With a team of passionate
              artists, designers, and developers, we embark on every project
              with dedication and innovation.
            </p>

            <p className="p-4">
              Our mission is to redefine the boundaries of creativity and design
              excellence. We specialize in website development, graphic design,
              video editing, and branding strategies that empower businesses to
              stand out in a competitive landscape. With an unwavering
              commitment to quality and innovation, we turn concepts into
              realities that resonate with your audience.
            </p>

            <p className="p-4">
              At Creative Minds Graphics (Pty) Ltd, our values are rooted in
              creativity, integrity, and collaboration. We believe in the power
              of collaboration and work closely with our clients to understand
              their vision, goals, and unique identity. Our aim is to not just
              meet expectations but to exceed them, ensuring that every project
              becomes a stepping stone towards your success.
            </p>

            <p className="p-4">
              Join us on a journey of creativity and transformation. Explore our
              portfolio, discover our services, and let's embark on a
              partnership that brings your brand's story to life. With Creative
              Minds Graphics (Pty) Ltd, your imagination takes center stage, and
              design becomes a powerful tool for growth and impact.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="fixed bottom-2">
            <p className="text-xs text-zinc-700">
              <a className=" hover:text-zinc-400" href="/termscndconditions">
                Terms & Conditions{" "}
              </a>
              •
              <a className=" hover:text-zinc-400" href="">
                {" "}
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </Glass>
    </>
  );
};

export default About;
