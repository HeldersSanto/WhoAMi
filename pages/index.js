import Head from "next/head";
import RouletteWheel from "@/Components/RouletteWheel";
import { useState } from "react";


export default function Home() {

  const data = [
    { id: 1,  ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013255&srctype=wol&srcid=share&par=7",
        sigla: "ia cap. 9 pp. 76-83"
      }
    ], nome: "Abigail", img: "/images/abigail.jfif" },

    { id: 2,  ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013273&srctype=wol&srcid=share&par=5",
        sigla: "ia cap. 3 pp. 25-32"
      }
    ], nome: "Abraão", img: "/images/abraao.jfif" },

    { id: 3,  ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013252&srctype=wol&srcid=share&par=6",
        sigla: "ia cap. 6 pp. 51-58"
      }
    ], nome: "Ana", img: "/images/ana.jfif" },

    { id: 4,  ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013256&srctype=wol&srcid=share&par=8",
        sigla: "ia cap. 10 pp. 84-91"
      }
    ], nome: "Elias", img: "/images/elias.jfif" },

    { id: 5,  ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013261&srctype=wol&srcid=share&par=7",
        sigla: "ia cap. 15 pp. 125-134"
      }
    ], nome: "Ester", img: "/images/ester.jfif" },

    { id: 5,  ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013259&srctype=wol&srcid=share&par=6",
        sigla: "ia cap. 13 pp. 108-115"
      }
    ], nome: "Jonas", img: "/images/jonas.jfif" },

    { id: 5,  ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013265&srctype=wol&srcid=share&par=2",
        sigla: "ia cap. 19 pp. 162-171"
      }
    ], nome: "José", img: "/images/jose.jfif" },

    { id: 6,  ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013264&srctype=wol&srcid=share&par=4",
        sigla: "ia cap. 18 pp. 153-161"
      }
    ], nome: "Maria", img: "/images/maria.jfif" },

    { id: 7,  ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013266&srctype=wol&srcid=share&par=8",
        sigla: "ia cap. 20 pp. 172-179"
      }
    ], nome: "Marta", img: "/images/marta.jfif" },

    { id: 8,  ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013272&srctype=wol&srcid=share&par=4",
        sigla: "ia cap. 2 pp. 17-24"
      }
    ], nome: "Noé", img: "/images/noe.jfif" },

    { id: 9,  ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013267&srctype=wol&srcid=share&par=9",
        sigla: "ia cap. 21 pp. 180-187"
      }
    ], nome: "Pedro", img: "/images/pedro.jfif" },

    { id: 10, ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013250&srctype=wol&srcid=share&par=7",
        sigla: "ia cap. 4 pp. 33-41"
      }
    ], nome: "Rute", img: "/images/rute.jfif" },

    { id: 11, ref: [
      {
        link: "https://www.jw.org/finder?wtlocale=T&docid=1102013253&srctype=wol&srcid=share&par=8",
        sigla: "ia cap. 7 pp. 59-66"
      }
    ], nome: "Samuel", img: "/images/samuel.jfif" },
  ];
  
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <Head>
        <title>Quem sou eu?</title>
        <meta name="description" content="Criado por Helder para noite de adoração em família." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <main style={{
        backgroundImage: selectedIndex ? `url(${data[selectedIndex]?.img})` : ""
      }}>
        {data[selectedIndex] && (
          <div className="info">
            <h1 className="poppins-black">{data[selectedIndex].nome}</h1>
            <p className="poppins-medium">Referencias: {data[selectedIndex].ref.map(el => (<a href={el.link} target="_blank">{el.sigla}</a>))} </p>
          </div>
        )}
        <RouletteWheel data={data} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </main>
    </>
  );
}
