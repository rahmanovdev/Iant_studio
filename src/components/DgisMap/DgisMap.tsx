'use client';

import React from 'react';
import styles from './DgisMap.module.scss';

interface DgisMapProps {
  width?: string | number;
  height?: string | number;
}

const DgisMap = ({
  width = '100%',
  height = '450px',
}: DgisMapProps) => {

  return (
    <div className={styles.mapContainer} style={{ width, height }}>
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.803539138998!2d74.60145691542834!3d42.87462157915696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c3e7d8a8a7%3A0x5e67da51a1e45776!2z0JrQvtC70YzRgdC60LDRjyDQmtC40ZfQtdC90LjRhtC60LAg0KHQvtC70YzQvdC40Lkg0JDQstGC0LDRgtGB0LosINCf0LDRgtCw0YHRgtCw0L0!5e0!3m2!1sru!2skg!4v1719753407025!5m2!1sru!2skg"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

    </div>
  );
};

export default DgisMap;
