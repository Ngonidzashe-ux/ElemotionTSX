import styles, { layout } from "../style";
import { Footer, Navbar } from "../Components";
import React from "react";

const TermsandConditions = () => {
  return (
    // See Navbar
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* margin, padding 
    flex-1 - growth or shrinking of container depending on the availabe space
    ${styles.flexStart}  - align child elements centrally along the cross axis and at the start of the horizontal axis
    flex-col - vertical stacking of child elements*/}
      <div className={` mt-20 ${styles.paddingX} ${layout.sectionInfo}`}>
        {/* heading */}
        <h4 className={styles.heading2}>Terms & Conditions of Use</h4>

        {/* Paragraph */}
        <p className="mt-10 font-poppins font-semibold text-white text-[25px] leading-[30.8px]">
          PLEASE READ THE FOLLOWING TERMS AND CONDITIONS CAREFULLY BEFORE USING
          THIS SITE.
        </p>

        {/* Paragraph */}
        <p className={`${styles.paragraph} my-5`}>
          By using the Delsys Incorporated (Delsys) Web site you signify your
          agreement to these Terms and Conditions. If you do not agree to these
          Terms and Conditions, do not use this site. Delsys may modify these
          Terms and Conditions at anytime.
        </p>

        {/* Heading */}
        <h4 className="font-poppins font-semibold xs:text-[36px] text-[32px] text-white xs:leading-[46.8px] leading-[36.8px] w-full mt-5 mb-3">
          Delsys Inc. Copyright Notice
        </h4>

        {/* Paragraphs */}
        <p className={`${styles.paragraph} mb-3`}>
          All materials appearing on www.delsys.com are protected by copyright
          as a collective work or compilation under U.S. copyright and other
          laws and are the property of Delsys Incorporated (“We”).
        </p>
        <p className={`${styles.paragraph} mb-3`}>
          You may not copy, reproduce, distribute, publish, display, perform,
          modify, create derivative works, transmit, or in any way exploit any
          content on www.delsys.com, nor may you distribute any part of this
          content over any network, including a local area network, sell or
          offer it for sale, or use such content to construct any kind of
          database.
        </p>
        <p className={`${styles.paragraph} mb-3`}>
          However you may download content from www.delsys.com for your own
          personal, noncommercial use but only if you make only one machine
          readable copy and/or one print copy. You may not alter or remove any
          trademark, copyright or other notice from copies of the content.
        </p>
        <p className={`${styles.paragraph} mb-3`}>
          To request permission to copy articles, tutorials, videos or graphics,
          contact Gianluca DeLuca, Delsys Inc., 23 Strathmore Road, Natick, MA
          01760, phone: 508-545-8200, fax: 508-975-4551.
        </p>
        <p className={`${styles.paragraph} mb-3`}>
          Delsys, Trigno, Bagnoli and EMGworks are Trademarks or Registered
          Trademarks of Delsys Incorporated. All other trademarks are the
          property of their respective owners.
        </p>
        {/* Heading */}
        <h4 className="font-poppins font-semibold xs:text-[36px] text-[32px] text-white xs:leading-[46.8px] leading-[36.8px] w-full mt-5 mb-3">
          Restrictions On Use of Materials
        </h4>

        {/* Paragraph */}

        <p className={`${styles.paragraph} mb-3`}>
          This site is copyright protected. Any textual or graphic material you
          copy, print, or download is licensed to you by Delsys Inc. for your
          personal, non-commercial use only, provided that you do not change or
          delete any copyright, trademark or other proprietary notices. All
          logos are owned by Delsys Inc. (unless otherwise stated) and you may
          not copy or use them in any manner.{" "}
        </p>
        <p className={`${styles.paragraph} mb-3`}>
          This site is controlled and operated by Delsys Inc.from its offices
          within the State of Massachusetts, United States of America. Delsys
          makes no representation that materials in the site are appropriate or
          available for use in other locations. Those who choose to access this
          site from other locations within the United States or Canada do so on
          their own initiative and are responsible for compliance with local
          laws, if and to the extent local laws are applicable.{" "}
        </p>

        {/* Heading */}
        <h4 className="font-poppins font-semibold xs:text-[36px] text-[32px] text-white xs:leading-[46.8px] leading-[36.8px] w-full mt-5 mb-3">
          Disclaimers and Limitation of Liability
        </h4>

        {/* Paragraph */}
        <p className={`${styles.paragraph} mb-3`}>
          THE MATERIALS IN THIS SITE ARE PROVIDED “AS IS” AND WITHOUT WARRANTIES
          OF ANY KIND EITHER EXPRESS OR IMPLIED. Delsys INCORPORATED DOES NOT
          WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS
          OF THE USE OF THE CONTENT OR OTHER MATERIALS IN THIS SITE IN TERMS OF
          THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE.
        </p>
        <p className={`${styles.paragraph} mb-3`}>
          Delsys Inc. has no duty or policy to update any information or
          statements contained on this site and, therefore, such information or
          statements should not be relied upon as being current as of the date
          you access this site. Moreover, any portion of the materials available
          on this site may include technical inaccuracies or typographical
          errors. Changes may be made from time to time without notice to the
          materials available on this site and to the products described on this
          site.{" "}
        </p>
        <p className={`${styles.paragraph} mb-3`}>
          TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, Delsys
          DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
          LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE AND NON-INFRINGEMENT. Delsys DOES NOT WARRANT THE
          ACCURACY, COMPLETENESS OR USEFULNESS OF ANY INFORMATION CONTAINED ON
          THIS SITE. Delsys DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE
          MATERIALS AVAILABLE ON THIS SITE WILL BE UNINTERRUPTED OR ERROR-FREE,
          THAT DEFECTS WILL BE CORRECTED, OR THAT THE MATERIALS, THIS SITE OR
          THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER
          HARMFUL COMPONENTS. YOU (AND NOT Delsys) ASSUME THE ENTIRE COST OF ALL
          NECESSARY SERVICING, REPAIR AND CORRECTION.{" "}
        </p>
        <p className={`${styles.paragraph} mb-3`}>
          UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE,
          SHALL Delsys BE LIABLE FOR ANY SPECIAL OR CONSEQUENTIAL DAMAGES THAT
          RESULT FROM THE USE OF, OR THE INABILITY TO USE, SITE OR ANY
          DOWNLOADED MATERIALS, EVEN IF Delsys OR ITS REPRESENTATIVES HAVE BEEN
          ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p className={`${styles.paragraph} mb-3`}>
          APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, OR
          THE ABOVE LIMITATIONS OF LIABILITY, SO THE ABOVE EXCLUSIONS MAY NOT
          APPLY TO YOU.
        </p>

        {/* Heading */}
        <h4 className="font-poppins font-semibold xs:text-[36px] text-[32px] text-white xs:leading-[46.8px] leading-[36.8px] w-full mt-5 mb-3">
          Links to Other Web Sites
        </h4>

        {/* Paragraph */}
        <p className={`${styles.paragraph} mb-3`}>
          Delsys Inc. makes no representation whatsoever regarding the content
          of any other web sites, which you may access from this site. When you
          access a non-Delsys web site, please understand that it is independent
          from Delsys and that Delsys has no control over the content on that
          web site. A link to a non-Delsys web site does not mean that Delsys
          endorses or accepts any responsibility for the content or use of such
          web site.
        </p>

        {/* Heading */}
        <h4 className="font-poppins font-semibold xs:text-[36px] text-[32px] text-white xs:leading-[46.8px] leading-[36.8px] w-full mt-5 mb-3">
          Submissions
        </h4>

        {/* Paragraph */}
        <p className={`${styles.paragraph} mb-3`}>
          Should any viewer of a document on this web site respond to Delsys
          with information including feedback data, such as questions, comments,
          suggestions, or the like regarding the site, or the content of any
          item, such information shall be deemed to be non-confidential and
          Delsys shall have no obligation of any kind with respect to such
          information. In addition, Delsys shall be free to reproduce, use,
          disclose, display, exhibit, transmit, perform, create derivative
          works, and distribute the information to others without limitation,
          and to authorize others to do the same. Further, Delsys shall be free
          to use any ideas; concepts, know-how or techniques contained in such
          information for any purpose whatsoever.
        </p>
        <p className={`${styles.paragraph} mb-3`}>
          In addition, when submitting ANY content to Delsys, you automatically
          grant, or warrant that the owner of such content has expressly
          granted, Delsys Incorporated the royalty-free, perpetual, irrevocable,
          non-exclusive and fully sublicensable right and license to use,
          reproduce, modify, adapt, publish, translate, create derivative works
          from, distribute, perform and display such content worldwide and/or to
          incorporate it in other works in any form, media, or technology now
          known or later developed.
        </p>

        {/* Heading */}
        <h4 className="font-poppins font-semibold xs:text-[36px] text-[32px] text-white xs:leading-[46.8px] leading-[36.8px] w-full mt-5 mb-3">
          Miscellaneous
        </h4>

        {/* Paragraph */}

        <p className={`${styles.paragraph} mb-3`}>
          This agreement shall be governed by and construed in accordance with
          laws of the State of Massachusetts, United States of America, without
          giving effect to any principles of conflicts of law. If any provision
          of this agreement is held to be unlawful, void, or for any reason
          unenforceable, then that provision shall be deemed severable from this
          agreement and shall not affect the validity and enforceability of any
          remaining provisions. This is the entire agreement between the parties
          relating to the subject matter herein, you agree to indemnify the
          Delsys Incorporated for any claims or damages resulting from your
          failure to abide by these terms and conditions.
        </p>
      </div>

      {/* See footer */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TermsandConditions;
