export default function SocialSection() {
  return (
    <div className="flex flex-col py-16 bg-black relative text-white items-center justify-center overflow-hidden">
      <div className="w-[890px] h-[80vh] absolute bg-[#E74941]/20 blur-[200px] rounded-full top-1/2 -left-1/4 -translate-y-1/2"></div>
      <p className="text-[32px] font-medium">Follow our socials</p>
      <p className="text-center text-[16px] opacity-70 mt-6">
        Check our profiles to stay up to date with the latest news from <br />{" "}
        the SUBBD world.
      </p>
      <div className="grid grid-cols-3 gap-6 container mx-auto mt-14">
        <div className="relative h-[385px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/9261/af50/1fdb5e099fda59ef2061f949bf52cbbf?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PFn8GpoU5FXFZo3UGRqY4jAakKQye0OsZhaZ9WypUyTthRETwbVMjm9hrybR7XWv81KcHJzucQzmaLvbhho2CVl~DAkK1iDlgqSL1P7oGU3STgrM8I4oL1hke4UlTGSlV~YjHF7IvUyjiwqNHRXa6mLJZUxdv0y783hk4k-jbH9H01cHJWTHq~FTtaxp52nNGwKG7kAKNAmaKFnX1~0xRKCxAqI-460kWa-3y4XYUGLnCROHfRRCRUUItuJGLl7jTKX1GDNm7gv05awMKprwO-QU8dJqQuo6JcRyj86deHxlPC1EBt~pNe~dJGSbCWZ4jqHIO3PRBV2CPvgKi9~NFg__"
            className="absolute h-full w-full object-cover opacity-50"
          />
          <div className="flex flex-col gap-8 items-center justify-center h-full relative z-10">
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-white/10">
              <img src="/assets/icons/instagram.svg" className="w-6 h-6" />
            </div>
            <p className="font-medium text-[32px]">Instagram</p>
            <div className="rounded-full px-5 py-3 border text-[13px] font-semibold">
              Check profile
            </div>
          </div>
        </div>
        <div className="relative h-[385px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/b2ef/bb30/2f1723067adee6bea57d5eb99156d889?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dR~w~5C81iaZZVuo8-Jf3FhUeYx~YP3NXxo0JgoTjiArUa10eBfraA93MX5U6yTZ0ZTQ3p~eaCAXGfCbIE1jo6qTkg69vy4Z~XWuWj04czZqtu8d0FQTo7awdhk6-4nMQ~78R9VNcfhlGZuqQp1pybfyS6dYik-YHi6yjRR73Qqm1APVx7ZzdeBOMe4CqusdqA1JcnQGB-6JJYM8NOeLTcYKT8CPGOUI7vtbo0tQapGLSI7TzpYK95lzIitGeO-Tdr-d9xuaZkQL-khznCVhS3-pJnjpakS0b33Ns7JDU0Itm4LhMVeqzBeSyVsMpCVtITd3UsOiKN96MQ9APtp--w__"
            className="absolute h-full w-full object-cover opacity-50"
          />
          <div className="flex flex-col gap-8 items-center justify-center h-full relative z-10">
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-white/10">
              <img src="/assets/icons/twitter.svg" className="w-6 h-6" />
            </div>
            <p className="font-medium text-[32px]">Twitter</p>
            <div className="rounded-full px-5 py-3 border text-[13px] font-semibold">
              Check profile
            </div>
          </div>
        </div>
        <div className="relative h-[385px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/d3fc/3e75/6dbd1a1199bc26c19d4af10ea1828fbc?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M2Tuf8XrhP93wFRxXDMv7MGmhr74QIagbqPkeFa1Jdgv9SD5KrEgmYDHFGaWhVvx~O7QoiLYj8~ZrkuauQ7xbya8IftRWsbOvEDjMHUUrRQi~bjR~dWQBIiX9DZhv88C3x26EjAT0JlAVzfEM2Nylijiy~K-I4qC71fzzOIv31Ua7lR0htYzhvbj~huubMOpBM0jOEWrX1nLGgqPox0Ns2lqhab6ZF87fUpw92xBPofcdriXKUJbfKElx2SHMk9YnM9TcsO3-Sdnb5EfH0nt2VClu47X1myiScSy5ikqMRqK89yCxa~EQ2w2141Ose-SmPq3X1SsYOyChuRusBP6LQ__"
            className="absolute h-full w-full object-cover opacity-50"
          />
          <div className="flex flex-col gap-8 items-center justify-center h-full relative z-10">
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-white/10">
              <img src="/assets/icons/telegram.svg" className="w-6 h-6" />
            </div>
            <p className="font-medium text-[32px]">Telegram</p>
            <div className="rounded-full px-5 py-3 border text-[13px] font-semibold">
              Check profile
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[104px] w-full px-11">
        <div className="grid grid-cols-3">
          <img src="./assets/logo/logo.png" className="w-[134px] h-[27px]" />
          <div className="flex gap-3 items-center mx-auto">
            <img src="/assets/icons/red-heart.svg" className="w-5 h-5" />
            <p className="text-[16px] font-semibold opacity-50">
              by Creators for Creators
            </p>
          </div>
          <div className="flex gap-4 ml-auto">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
              <img src="/assets/icons/instagram.svg" className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
              <img src="/assets/icons/telegram.svg" className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
              <img src="/assets/icons/reddit.svg" className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
              <img src="/assets/icons/twitter.svg" className="w-5 h-5" />
            </div>
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
              <img src="/assets/icons/discord.svg" className="w-5 h-5" />
            </div>
          </div>
        </div>
        <p className="text-[13px] font-medium opacity-30 mx-auto mt-8">
          Copyright © 2024 SUBBD. All rights reserved.
        </p>
      </div>
    </div>
  );
}
