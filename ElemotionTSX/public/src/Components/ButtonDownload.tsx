//Check Button Product
import { SDG7 } from "../resources";

const ButtonDownload = ({ styles }: { styles: any }) => {
  return (
    /*You have wrapped the button with an anchor tag with a href of a file in the resources and we want the button to download the file when clicked
    and you do that by adding a download attribute and you specify the name of the document when its downloaded */
    <a href={SDG7} download="SDG7.pdf">
      <button
        type="button"
        className={`py-4 px-6 w-[160px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-non ${styles} rounded-[10px] 
  transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100`}
      >
        Download
      </button>
    </a>
  );
};

export default ButtonDownload;
