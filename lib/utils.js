import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// नोट: यह फ़ाइल काम करने के लिए, आपको 'clsx' और 'tailwind-merge' npm पैकेजेस को इंस्टॉल करना होगा।
