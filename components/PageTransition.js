import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { fadeInUp } from '../utils/animations'

export default function PageTransition({ children }) {
  const router = useRouter()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.asPath} variants={fadeInUp} initial="initial" animate="animate" exit="exit">
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
