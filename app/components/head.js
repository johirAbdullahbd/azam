"use client";

import { useEffect, useRef } from "react";
import styles from "../styles/head.module.css";
import Link from "next/link";
import Image from "next/image";
const Head = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Autoplay failed:", error);
        });
      }
    };

    // Play video after component is mounted
    playVideo();
  }, []);

  return (
    <div className={styles.containear}>
      <div className={styles.cardBody}>
        <div className={styles.imgTextContainear}>
          <video className={styles.video} controls autoPlay muted ref={videoRef}>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className={styles.video} controls autoPlay muted ref={videoRef}>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* <div className={styles.img}></div> */}
        </div>
        <div className={styles.imgTextContainear}>
          <div className={styles.text}>
            <p>
              Minim incididunt non voluptate anim. Velit et<span className={styles.name}>Neam Azam chowdory</span> laboris culpa adipisicing qui.
              Incididunt officia laboris elit ipsum culpa sit magna eu incididunt labore Lorem excepteur anim non. In enim labore nostrud
              exercitation. Labore Lorem id do quis pariatur consequat labore.
            </p>
          </div>
          <Image className={styles.img} src="/fb.png" width={100} height={100}></Image>
        </div>
        <div className={styles.iconContainear}>
          <Link target="_blank" href="https://twitter.com/Johir_Abdullah">
            <Image className={styles.iconImg} src="/twitter.jpg" width={100} height={100} alt="twitter" />
          </Link>

          <Link target="_blank" href="https://www.linkedin.com/">
            <Image className={styles.iconImg} src="/linkedin.png" width={100} height={100} alt="linkedin" />
          </Link>
          <Link target="_blank" href="https://twitter.com/Johir_Abdullah">
            <Image className={styles.bc} src="/instgrm.png" width={100} height={100} alt="instgrm" />
          </Link>

          <Link target="_blank" href="https://www.linkedin.com/">
            <Image className={styles.bckfb} src="/fb.png" width={100} height={100} alt="fb" />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/">
            <Image className={styles.bc} src="/medium.png" width={100} height={100} alt="medium" />
          </Link>

          <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=johirabdullahbd@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image className={styles.iconImg} src="/gmail.png" width={100} height={100} alt="gmail" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Head;
