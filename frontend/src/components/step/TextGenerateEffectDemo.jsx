import React from "react";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const words = `Our school transportation ensures that students arrive safely and on time, providing peace of mind for parents. The school bus drivers are professional and friendly, making the daily commute enjoyable for the students.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

export default TextGenerateEffectDemo;
