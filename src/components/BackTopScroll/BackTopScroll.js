import ScrollToTop from 'react-scroll-up';
import { FaArrowUp } from 'react-icons/fa';

export default function BackTopScroll() {
  return (
    <ScrollToTop
      showUnder={160}
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        cursor: 'pointer',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s',
        // backgroundColor: '#2196f3',
        backgroundColor: 'rgba(33,150,243,0.8)',
        borderRadius: '50%',
        padding: 15,
        width: 44,
        height: 44,
        scrollBehavior: 'smooth',
      }}
    >
      <FaArrowUp
        style={{
          color: 'white',
        }}
      />
    </ScrollToTop>
  );
}
