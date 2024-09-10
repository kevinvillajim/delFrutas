import Card from "./Card";

export default function CardsHome() {
  return (
    <>
      <div className="grid grid-cols-3">
        <Card
          title="Ejemplo1"
          text="Hola que hace "
          button={{
            link: "#",
            text: "Hola que hace",
            dark: false,
            onClick: null,
          }}
        />
        <Card
          title="Ejemplo1"
          text="Hola que hace "
          button={{
            link: "#",
            text: "Hola que hace",
            dark: false,
            onClick: null,
          }}
        />
        <Card
          title="Ejemplo1"
          text="Hola que hace "
          button={{
            link: "#",
            text: "Hola que hace",
            dark: false,
            onClick: null,
          }}
        />
      </div>
    </>
  );
}
