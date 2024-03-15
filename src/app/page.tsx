import Image from "next/image";
import Banner from '@/components/Banner'
import Card from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{margin:"20px", display:"flex", flexDirection:"row",
      flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
        <Card hospitalName="Rajavithi Hospital" imgSrc="/img/rajavithi.jpg"/>
        <Card hospitalName="Chulalongkorn Hospital" imgSrc="/img/chula.jpg"/>
        <Card hospitalName="Thammasat University Hospital" imgSrc="/img/thammasat.jpg"/>
      </div>
    </main>
  );
}
