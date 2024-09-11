import Footer from "../components/Footer";
import Header from "../components/Header";
import SotryTimeLine from "../components/StoryTimeLine";
import TeamHome from "../components/TeamHome";

export default function Nosotros() {
  return (
    <>
      <div className="bg-black w-screen h-full">
        <Header />
        <div className="h-screen w-screen mt-[8rem]">
          <SotryTimeLine
            storiesData={[
              {
                img: "https://cdn.usegalileo.ai/stability/98da1a00-699d-4e23-b7d7-aedc36e83493.png",
                year: "2019",
                title: "2019 - Inicios",
                description:
                  "We're a company that has been around for over 20 years. We are proud of our history, and we want to share it with you.",
              },
              {
                img: "https://cdn.usegalileo.ai/stability/8e94cb87-f457-4a6f-8882-7755cb9f89db.png",
                year: "2021",
                title: "Title 2021",
                description: "Description for 2021",
              },
              {
                img: "https://cdn.usegalileo.ai/stability/b674af94-ca93-474b-9bcf-f219c4a5965e.png",
                year: "2022",
                title: "Title 2022",
                description: "Description for 2022",
              },
            ]}
          />
          <TeamHome
            title="Conoce Nuestro Equipo"
            subTitle="Our Team"
            members={[
              {
                name: "Janeth Jimenez",
                position: "Vendedor",
                img: "https://placehold.co/300x300",
                socialMedia: [
                  {
                    icon: "/facebook.svg",
                    link: "https://www.facebook.com/kevin.villacreses.5/",
                  },
                  {
                    icon: "/linkedIn.svg",
                    link: "https://www.linkedin.com/in/kevin-villacreses-1851a7157/",
                  },
                ],
              },
              {
                name: "Kevin Villacreses",
                position: "Vendedor",
                img: "https://placehold.co/300x300",
                socialMedia: [
                  {
                    icon: "/facebook.svg",
                    link: "https://www.facebook.com/kevin.villacreses.5/",
                  },
                  {
                    icon: "/linkedIn.svg",
                    link: "https://www.linkedin.com/in/kevin-villacreses-1851a7157/",
                  },
                ],
              },
            ]}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
