import Wave from "/img/Wave/Wave.svg"

const WaveSection = () => {
  return (
    <section className="w-full flex items-center justify-center">
        <img src={Wave} alt="wave" className="w-full absolute bg-cover" />
    </section>
  )
}

export default WaveSection