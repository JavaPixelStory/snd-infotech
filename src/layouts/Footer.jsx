import styles from '../style';
import { logo } from '../assets';
import { footerLinks } from '../constants';

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
    id='contacts'
  >
    <div className='flex justify-between items-center md:flex-row flex-col relative z-[1]'>
      <h2 className={styles.heading2}>Контакты</h2>
    </div>
    <div
      className={`flex justify-between items-start md:flex-row flex-col mt-6 w-full`}
    >
      <div className='flex flex-col justify-start mr-10'>
        <img src={logo} alt='SND' className='w-[180px] object-contain' />
        <p className={`${styles.paragraph} mt-4 max-w-[250px]`}>
          Limited Liability Company SENDY SOFTWARE
        </p>
      </div>
      <div className='flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            {/* <h4 className='font-sndReg text-[18px] leading-[27px] text-white'>
              {footerlink.title}
            </h4> */}
            <ul className='list-none mt-4'>
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-sndLight text-[16px] leading-[24px] text-dimWhite max-w-[300px] ${
                    index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] mt-6'>
      <p className='font-sndLight text-center text-[18px] leading-[27px] text-white'>
        Copyright Ⓒ 2023 SENDY SOFTWARE LLC. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
