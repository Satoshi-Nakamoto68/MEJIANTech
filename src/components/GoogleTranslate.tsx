import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Set Google Translate settings
    (window as any).gtranslateSettings = {
      default_language: "en",
      detect_browser_language: true,
      languages: ["en", "th", "ru", "ko", "it", "ja", "zh-CN"],
      wrapper_selector: ".gtranslate_wrapper",
    };

    // Check if script is already loaded
    const existingScript = document.querySelector(
      'script[src="https://cdn.gtranslate.net/widgets/latest/float.js"]'
    );

    if (!existingScript) {
      // Create and append script
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.defer = true;
      document.body.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Optional: Remove script on unmount if needed
      // const script = document.querySelector('script[src="https://cdn.gtranslate.net/widgets/latest/float.js"]');
      // if (script) {
      //   script.remove();
      // }
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GoogleTranslate;
