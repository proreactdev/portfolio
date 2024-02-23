import { motion } from 'framer-motion';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <nav className='nav'>
                <div className='flex-end'>
                    <ul className='nav-list'>
                        <li>
                            <motion.a
                                href='https://hh.ru/resume/'
                                target='_blank'
                                rel='noopener noreferrer'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                title='Резюме на hh.ru'
                            >
                                Резюме
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
                                <span className='header-hidden-text'>
                                    GitHub
                                </span>
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
                                <span className='header-hidden-text'>
                                    Vk
                                </span>
                            </motion.a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
