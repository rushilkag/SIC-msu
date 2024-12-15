const Tweet = ({ name, position, text, photoLink, tweetLink }) => {
  return (
    <div className="relative group">
      <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
      <a href={tweetLink} className="cursor-pointer">
        <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5 highlight">
          <div className="flex items-center space-x-4">
            <img
              src={photoLink}
              className="w-12 h-12 bg-center bg-cover border rounded-full"
              alt={name}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">
                {name}
              </h3>
              <p className="text-gray-500 text-md">{position}</p>
            </div>
          </div>
          <p className="leading-normal text-gray-300 text-md">
            {text}
          </p>
        </div>
      </a>
    </div>
  );
};

export default function Testimonies() {
  return (
    <section id="testimonies" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-5 py-5 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
            Meet The Team
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              Meet The Team
            </h1>

          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            <li className="text-sm leading-6">
              <Tweet
                name="Shivang Kapoor"
                position="Co-Founder and Director of Business Development & Operations"
                text="Sutainability is important, sell breezes to kids"
                photoLink="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_OywAqHDu8B6FFIKgMPX_syJehD5s_VkeIZq_6RMi4VHbXamZC_9g1ufgrc_dtj4Uex_tQZ80cc3vfo-o5beGlTPMLKD5MaEd7ZrygKe0"
                tweetLink="https://www.linkedin.com/in/shivangkapoor1/"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Erik Sebe"
                position="
Founder and Vice President"
                text="Holder, sustainability is important, sell drugs to kids"
                photoLink="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_OywAqHDu8B6FFIKgMPX_syJehD5s_VkeIZq_6RMi4VHbXamZC_9g1ufgrc_dtj4Uex_tQZ80cc3vfo-o5beGlTPMLKD5MaEd7ZrygKe0"
                tweetLink="https://www.linkedin.com/in/eriksebe/"
              />
            </li>
            
            
          </ul>
          <ul className="hidden space-y-8 sm:block">
            <li className="text-sm leading-6">
              <Tweet
                name="Bryan Koukoudian"
                position="Director of Legal & Operations"
                text="Sell drugs to kids, holder"
                photoLink="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_OywAqHDu8B6FFIKgMPX_syJehD5s_VkeIZq_6RMi4VHbXamZC_9g1ufgrc_dtj4Uex_tQZ80cc3vfo-o5beGlTPMLKD5MaEd7ZrygKe0"
                tweetLink="https://www.linkedin.com/in/bryan-koukoudian/"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Saif Usman"
                position="Founder and President"
                text="Sell drugs to kids, holder"
                photoLink="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_OywAqHDu8B6FFIKgMPX_syJehD5s_VkeIZq_6RMi4VHbXamZC_9g1ufgrc_dtj4Uex_tQZ80cc3vfo-o5beGlTPMLKD5MaEd7ZrygKe0"
                tweetLink="https://www.linkedin.com/in/saif-usman/"
              />
            </li>
            
            
    
          </ul>
          <ul className="hidden space-y-8 lg:block">
            <li className="text-sm leading-6">
              <Tweet
                name="Anvi Thakur"
                position="Development and Operations Chair"
                text="Sell drugs to kids, holder"
                photoLink="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_OywAqHDu8B6FFIKgMPX_syJehD5s_VkeIZq_6RMi4VHbXamZC_9g1ufgrc_dtj4Uex_tQZ80cc3vfo-o5beGlTPMLKD5MaEd7ZrygKe0"
                tweetLink="https://www.linkedin.com/in/anvithakur/"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Ruhani Singh"
                position="Director of Marketing and HR"
                text="Sell drugs to kids, holder"
                photoLink="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_OywAqHDu8B6FFIKgMPX_syJehD5s_VkeIZq_6RMi4VHbXamZC_9g1ufgrc_dtj4Uex_tQZ80cc3vfo-o5beGlTPMLKD5MaEd7ZrygKe0"
                tweetLink="https://www.linkedin.com/in/ruhani-singh/"
              />
            </li>
            
            
          </ul>
        </div>
      </div>
    </section>
  );
}
