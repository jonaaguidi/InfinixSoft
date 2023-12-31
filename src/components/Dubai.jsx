import Gitex from "/img/Dubai/gitex.svg"
import Text1 from "/img/Dubai/textDubai.svg"
import Text2 from "/img/Dubai/textDubai2.svg"

const Dubai = () => {
  return (
    <section className="w-full h-[42px] bg-[#DFE0E3] flex items-center justify-center">
      <div className="min-w-[425px] py-2.5 flex items-center justify-center gap-6 max-[520px]:scale-90 max-[445px]:scale-[0.85]">
        <a href="https://www.gitex.com/" target="_blank" rel="noreferrer">
          <img src={Gitex} alt="Gitex Dubai" />
        </a>
        <img src={Text1} alt="Gitex Dubai" />
        <img src={Text2} alt="Gitex Dubai" />
      </div>
    </section>
  )
}

export default Dubai