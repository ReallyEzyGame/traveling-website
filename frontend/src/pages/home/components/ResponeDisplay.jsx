import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import { Copy, RefreshCcw } from 'lucide-react';
import styles from './ResponeDisplay.module.css';

const mockResponse = `
# Khám phá Tây Ninh: Đỉnh Núi Bà Đen

Chào mừng bạn đến với nóc nhà Nam Bộ! Dưới đây là lịch trình gợi ý:

* **Sáng sớm:** Di chuyển bằng cáp treo lên đỉnh núi để săn mây.
* **Trưa:** Thưởng thức đặc sản *Bánh tráng phơi sương* Trảng Bàng.
* **Lưu ý:** Nhiệt độ trên đỉnh thường thấp hơn 3-5 độ so với chân núi.

> Chúc bạn có một chuyến đi an toàn và đầy trải nghiệm!
`;

// Trong HomePage():
// <ResponseDisplay content={mockResponse} isStreaming={false} />


export function ResponseDisplay({ content, isStreaming }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`${styles.bottomResponseWrapper} ${styles.noScrollbar}`}
    >
      {/* Header nhỏ để trang trí */}
      <div className="flex justify-between items-center mb-4 border-b border-orange-100 pb-2">
        <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">AI Travel Guide</span>
        <div className="flex gap-2">
           <Copy size={14} className="cursor-pointer text-orange-400 hover:text-orange-600" />
           <RefreshCcw size={14} className="cursor-pointer text-orange-400 hover:text-orange-600" />
        </div>
      </div>

      {/* Nội dung Render Markdown */}
      <div className={`${styles.proseText} ${isStreaming ? styles.typingCursor : ''}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
}