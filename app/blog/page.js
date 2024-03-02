"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/blog.module.css";
import Image from "next/image";
const images = ["/fb.png", "/gmail.png", "/instgrm.png", "/linkedin.png", "/medium.png"];
const Blog = () => {
  const [screenSize, setScreenSize] = useState(""); // State to store screen size
  const [array, setArray] = useState([0]); // State to store array based on screen size

  useEffect(() => {
    // Function to update screen size state based on window width
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setArray([0, 1, 2, 3]);
      } else if (width >= 768) {
        setArray([0, 1, 2]);
      } else if (width >= 576) {
        setArray([0, 1]);
      } else {
        setArray([0]);
      }
    };

    // Initial call to set screen size state on Blog mount
    updateScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", updateScreenSize);

    // Remove event listener on Blog unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on Blog mount
  const addValue = () => {
    // Add 1 to every index of the array
    setArray(array.map((value) => value + 1));
  };

  const subtractValue = () => {
    // Subtract 1 from every index of the array
    setArray(array.map((value) => value - 1));
  };
  console.log(array, "array", array.length - 1, images.length - 1, array[array.length - 1], array[array.length - 1] !== images.length - 1);

  return (
    <div className={styles.containear}>
      <div className={styles.cardContainear}>
        {array.map((arr, i) => (
          <div className={styles.card}>
            <Image className={styles.img} src={images[arr]} alt={images[arr]} width={100} height={100} />
          </div>
        ))}
      </div>
      {array[array.length - 1] !== images.length - 1 && (
        <button className={styles.rightBtn} onClick={addValue}>
          Add 1 to Each
        </button>
      )}
      {array[0] !== 0 && (
        <button className={styles.leftBtn} onClick={subtractValue}>
          Subtract 1 from Each
        </button>
      )}
    </div>
  );
};

export default Blog;
