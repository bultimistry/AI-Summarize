import {logo} from '../assets';

const Hero = () => {
  return (
    
    <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
     <img src={logo} alt='sumz-logo' className='w-28 object-contain' />
     
     <button type='button'onClick={()=> window.open('https://github.com/bultimistry')}
     className='black_btn'>github

     </button>
    </nav>

<h1 className='head_text'>
  Summarize Article with <br className='max-md:hidden' />
  <span className='orange_gradient'>OpenAI Gpt-4</span>

</h1>
<h2>
  simply your reading with summize, an open-source article summarizer
  that transform lenthy articles into clear and concise summaries 
</h2>

 </header>
  )
}

export default Hero