function changeTab(tabNumber) {
    if (tabNumber === 0) {
        document.getElementById('professionalPrice').innerHTML = `
            <div class="text-[24px] leading-[1.45]">$</div>
            <div class="text-[54px] font-bold mb-[0.75rem] leading-[0.9] pl-[0.25rem]">89.95</div>
            <div class="text-[24px] leading-[1.45]">/mo</div>`;
        document.getElementById('professionalBilling').innerHTML = `$80.95/mo billed yearly, save 10%`;

        document.getElementById('webmasterPrice').innerHTML = `
            <div class="text-[24px] leading-[1.45]">$</div>
            <div class="text-[54px] font-bold mb-[0.75rem] leading-[0.9] pl-[0.25rem]">49.95</div>
            <div class="text-[24px] leading-[1.45]">/mo</div>`;
        document.getElementById('webmasterBilling').innerHTML = `$49.95/mo billed yearly, save 10%`;

        document.getElementById('basicPrice').innerHTML = `
            <div class="text-[24px] leading-[1.45]">$</div>
            <div class="text-[54px] font-bold mb-[0.75rem] leading-[0.9] pl-[0.25rem]">29.95</div>
            <div class="text-[24px] leading-[1.45]">/mo</div>`;
        document.getElementById('basicBilling').innerHTML = `$29.95/mo billed yearly, save 10%`;
    } else if (tabNumber === 1) {
        document.getElementById('professionalPrice').innerHTML = `
            <div class="text-[24px] leading-[1.45]">$</div>
            <div class="text-[54px] font-bold mb-[0.75rem] leading-[0.9] pl-[0.25rem]">80.95</div>
            <div class="text-[24px] leading-[1.45]">/mo</div>`;
        document.getElementById('professionalBilling').innerHTML = `billed yearly, 10% off, $971.46/year`;

        document.getElementById('webmasterPrice').innerHTML = `
            <div class="text-[24px] leading-[1.45]">$</div>
            <div class="text-[54px] font-bold mb-[0.75rem] leading-[0.9] pl-[0.25rem]">44.95</div>
            <div class="text-[24px] leading-[1.45]">/mo</div>`;
        document.getElementById('webmasterBilling').innerHTML = `billed yearly, 10% off, $539.46/year`;

        document.getElementById('basicPrice').innerHTML = `
            <div class="text-[24px] leading-[1.45]">$</div>
            <div class="text-[54px] font-bold mb-[0.75rem] leading-[0.9] pl-[0.25rem]">26.95</div>
            <div class="text-[24px] leading-[1.45]">/mo</div>`;
        document.getElementById('basicBilling').innerHTML = `billed yearly, 10% off, $323.46/year`;
    }

    document.getElementById('tab0').classList.toggle('bg-[#FE6100]', tabNumber === 0);
    document.getElementById('tab0').classList.toggle('text-white', tabNumber === 0);
    document.getElementById('tab0').classList.toggle('bg-white', tabNumber !== 0);
    document.getElementById('tab0').classList.toggle('text-[#FE6100]', tabNumber !== 0);

    document.getElementById('tab1').classList.toggle('bg-[#FE6100]', tabNumber === 1);
    document.getElementById('tab1').classList.toggle('text-white', tabNumber === 1);
    document.getElementById('tab1').classList.toggle('bg-white', tabNumber !== 1);
    document.getElementById('tab1').classList.toggle('text-[#FE6100]', tabNumber !== 1);
}

window.addEventListener('scroll', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const heroSectionHeight = document.querySelector('#hero-section').offsetHeight;

    if (window.scrollY > heroSectionHeight) {
        scrollToTopBtn.style.display = 'inline';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});