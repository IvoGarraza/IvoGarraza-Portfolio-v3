import React from "react";
import { useTranslation } from "react-i18next";
import {motion} from 'framer-motion'

const Blog = ({section}) => {
  const { t } = useTranslation("global");

  return (
    <motion.div initial={{opacity:1}} animate={{opacity: ['all','about'].includes(section)?1:0.2}} className="w-full h-full bg-sexto flex items-center justify-center flex-col">
      <span className="font-medium sm:text-xl  text-white">{t("eng_level")}</span>
      <span className="text-white sm:text-7xl text-4xl font-bold">B1</span>
      <span className="text-white">(EF-SET Certificacion)</span>
    </motion.div>
  );
};

export default Blog;
