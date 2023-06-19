import Image from "next/image";

const BlogPost = () => {
  return (
    <section className="py-16 px-5">
      <div className="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row">
        <div className="flex flex-col w-full lg:w-1/2">
          <h2 className="text-3xl font-extrabold py-4 xl:text-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="py-4 mb-4 text-xs sm:text-sm md:text-md xl:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            aperiam debitis maiores, cupiditate iste neque quis repudiandae
            dolor suscipit. Alias ea repudiandae, ducimus quos culpa illo
            officiis quia. Ipsa, perferendis? Quod, ipsam doloribus repellendus
            ratione ea dicta beatae molestiae officiis? Sequi nostrum totam,
            quisquam minus perspiciatis voluptate velit harum obcaecati?
          </p>
          <div className="flex items-center gap-5">
            <Image
              src="https://images.pexels.com/photos/1028927/pexels-photo-1028927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={50}
              height={50}
              className="object-cover rounded-full w-[50px] h-[50px]"
            />
            <span className="text-xl font-bold">Admin</span>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2">
          <Image
            src="https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blogImg"
            width={800}
            height={800}
            className="object-cover"
          />
        </div>
      </div>
      <p className="pt-16 text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eos fugit
        tenetur suscipit facere? Accusantium quis, voluptate, ab culpa autem
        magni alias odio dolore, veniam dignissimos aspernatur facilis eius
        numquam ipsa saepe aliquam est a? Et veniam distinctio natus officia aut
        odio quidem blanditiis atque explicabo labore non qui unde vel sed,
        nemo, quod recusandae dolores, repudiandae nostrum magni accusamus ut
        cupiditate quia. Veritatis, laudantium voluptas, vero repellendus
        <br />
        <br />
        blanditiis ratione dolor aperiam in eum impedit voluptatem eos velit sit
        cupiditate nisi rem provident. Rem exercitationem sapiente magnam
        laborum alias quos voluptatibus debitis, similique, maiores, earum culpa
        cupiditate possimus laudantium assumenda nisi harum dolores ut?
        Molestiae voluptates tenetur sit rerum beatae, eos minus, numquam
        repellendus nisi animi, nemo quia unde perspiciatis commodi tempore.
        Nihil, illo maiores nisi distinctio autem sequi voluptatem molestiae
        quasi omnis esse voluptatum rerum velit voluptas at quibusdam maxime
        ullam quam accusantium saepe necessitatibus voluptatibus placeat ut
        repellat quod. Itaque tempore ad aperiam magnam et incidunt repudiandae
        dolor assumenda inventore, debitis, voluptatum magni minus ut laudantium
        sequi mollitia officiis quo omnis neque quos. Doloribus eaque dolore
        <br />
        <br />
        nostrum aspernatur nam provident nemo quos, libero rem quidem? Minima
        error porro, consequuntur natus ipsum consequatur? Soluta ipsa est
        mollitia ab labore illo nulla aliquid officiis dolore illum iusto fuga
        repellat autem esse explicabo fugiat quis natus, ut pariatur quo
        provident molestias. Rem exercitationem expedita saepe harum nobis
        necessitatibus molestias quidem repudiandae odio repellat blanditiis eos
        debitis assumenda distinctio voluptates iusto recusandae, aperiam
        laborum. Nobis, quae. Natus consequatur odio obcaecati nesciunt dolores
        quidem sint officia eos, autem alias quas, dicta amet corrupti ratione
        voluptatum ea reprehenderit deleniti. Assumenda iure optio nisi delectus
        illum cum voluptatum nulla magnam sint laudantium asperiores, quibusdam
        molestiae fugit culpa voluptatibus. Atque repellat deserunt pariatur
        molestias vero tenetur similique excepturi animi magni quo incidunt,
        accusantium voluptatem fuga, qui expedita explicabo inventore harum
        commodi, soluta nisi quis! Officia nesciunt a et, praesentium magnam
        harum ullam dolorum porro voluptatem explicabo? Nostrum soluta repellat
        ipsam corporis deleniti, accusantium excepturi deserunt minima illum.
        Ad, aut! Asperiores, commodi illo id soluta dolore laborum non atque
        explicabo! Distinctio tempore nam, voluptas illum rerum vero nostrum
        eligendi at. Illum, quam, a nesciunt, aliquid voluptate tempore
        accusantium eaque consectetur fuga assumenda mollitia optio? Incidunt,
        sint, eligendi at voluptas, repellendus illo obcaecati iste soluta
        praesentium voluptate ex esse ratione neque. Magni eligendi, maxime id
        nesciunt eum esse tempore iusto tempora accusamus labore incidunt
        officiis ipsum! Debitis optio dolor minus, nostrum eligendi dolorum.
        <br />
        <br />
        Molestiae officia odit voluptatum dignissimos perspiciatis est autem.
        Esse eos deleniti non eum accusantium dolores, a placeat assumenda
        quisquam eius molestiae nesciunt laboriosam. Iste odit impedit
        inventore, voluptas, laboriosam rerum illo culpa recusandae officia ad
        quia tempore nihil totam amet incidunt. Eum, non! Quaerat obcaecati
        dolorum distinctio! Atque accusantium facilis blanditiis? Ab
        accusantium, odit nihil ducimus quae, et aspernatur numquam reiciendis
        eaque dolor suscipit repellat quam rerum aliquid quos alias explicabo?
        Quia voluptates, quo odio ipsum sed odit, quis sapiente dolor inventore
        corrupti suscipit cumque vel fugiat assumenda enim deleniti
        reprehenderit? Suscipit tenetur sapiente voluptatibus.
      </p>
    </section>
  );
};
export default BlogPost;
