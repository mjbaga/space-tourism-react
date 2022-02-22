import Header from "components/layout/Header";

const Page = ({ wrapClass, mainClass, children }) => {

  return (
    <div className={`${wrapClass ? wrapClass : ''} image-background`}>
      <Header />
      <main className={`flow ${mainClass ? mainClass : ''}`}>
        {children}
      </main>
    </div>
  )
}

export default Page;