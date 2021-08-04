import ScrollToTop from 'react-scroll-up';
import { FaArrowUp } from 'react-icons/fa';

export default function BackTopScroll() {
  return (
    <ScrollToTop
      showUnder={160}
      style={{
        position: 'fixed',
        bottom: 30,
        right: 50,
        cursor: 'pointer',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s',
        backgroundColor: '#2196f3',
        borderRadius: '50%',
        padding: 15,
        width: 48,
        height: 48,
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
