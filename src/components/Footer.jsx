import { motion } from 'framer-motion';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <h2 class='rainbow-text'>Связаться со мной</h2>
            <ul className='footer-links'>
                <li>
                    <motion.a
                        href='https://hh.ru/resume/'
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title='Резюме на hh.ru'
                    >
                        Resume
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href='https://github.com/777developer777'
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title='GitHub'
                    >
                        <FaGithub />
                        <span className='footer-hidden-text'>GitHub</span>
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href='https://vk.com/react_developer'
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title='Vkontakte'
                    >
                        <FaTelegram />
                        <span className='footer-hidden-text'>Vk</span>
                    </motion.a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
