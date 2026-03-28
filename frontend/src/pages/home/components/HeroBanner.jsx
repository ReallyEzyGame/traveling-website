/**
 * Hero Banner hiển thị như thành phần đầu tiên( có thể xem là header của trang web)
 * bao gồm: background lớn chứa hình ảnh đang được quan tâm, và phần Recommend Box chứa thông tin cụ thể hơn vì tình hình
 */
import { useEffect, useState } from 'react';
import { getInformation } from '../../../../api/home/heroBannerApi';
import { motion } from 'framer-motion';
// icon
import {
  CalendarDays,
  MapPin,
  Sun,
  Wind,
  Droplets,
  ThermometerSun
} from 'lucide-react';
import styles from './HeroBanner.module.css';


export function HeroBanner() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Hook này sẽ được đổi thành toàn cục( bao phủ phần home page)
  // để thay đổi thông tin được lấy mỗi khi nhu cầu người dùng cần được thay đổi
  useEffect(() => {
    getInformation()
      .then(res => {
        setData(res)
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error)
        isLoading(true)
      })
  }, [])


  return (
    <div className={styles.heroBanner}>
      {(data !== null) && <RecommendBox data={data} />}
    </div>
  );
}




export function RecommendBox({ data }) {
  if (!data) return null;

  const { topic, place, date, detail } = data;

  // Định dạng ngày tháng
  const formattedDate = new Date(date).toLocaleDateString('vi-VN');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles.recommendBox}
    >
      <div className={styles.recommendBoxContent}>
        {/* Main Stats: Temp & Humid */}
        <div className={styles.recommendMainStats}>
          <span className={styles.recommendTemp}>{detail.tempature}°C</span>
          <div className={styles.recommendHumid}>
            <Droplets size={16} />
            <span>{Math.round(detail.humid * 100)}%</span>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Header: Topic & State */}
        <div className={styles.recommendHeader}>
          <Sun size={20} className={styles.iconYellow} />
          <span> {detail.describe}</span>
        </div>

        {/* Location */}
        <div className={styles.recommendLocation}>
          <MapPin size={16} />
          <span>{place.provice}, {place.country}</span>
        </div>

        {/* Time */}
        <div className={styles.recommendTime}>
          <CalendarDays size={16} />
          <span>{formattedDate}</span>
        </div>

        {/* Sub Stats: UV & Wind */}
        <div className={styles.recommendSubStats}>
          <div className={styles.recommendStatItem}>
            <ThermometerSun size={16} />
            <span>UV: {detail.uv}</span>
          </div>
          <div className={styles.recommendStatItem}>
            <Wind size={16} />
            <span>Gió: {detail.windSpeed}m/s</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}