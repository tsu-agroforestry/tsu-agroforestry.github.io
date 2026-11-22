export type PublicationType = 'journal' | 'chapter' | 'extension'

export interface Publication {
  id: string
  year: number
  type: PublicationType
  authors: string
  title: string
  venue: string
  details?: string
  url?: string
}

export const publications: Publication[] = [
  // Peer-Reviewed Journal Articles (30)
  {
    id: 'pub-2025-1',
    year: 2025,
    type: 'journal',
    authors:
      'Nghia, N. K., Dalma, K. E., Haydee, K. M., Xa, L. T., Morton, L. W., Tecimen, H. B., ... & Oanh, N. T. K.',
    title:
      'Bacterial diversity in longan orchard alluvial soil is influenced by cultivation time and soil properties',
    venue: 'Frontiers in Soil Science',
    details: '5, 1610343',
    url: 'https://www.frontiersin.org/journals/soil-science/articles/10.3389/fsoil.2025.1610343/full',
  },
  {
    id: 'pub-2025-2',
    year: 2025,
    type: 'journal',
    authors:
      'Nghia, N. K., Robatjazi, J., Vy, V. D. T., Tecimen, H. B., Lasar, H. G. W., Lesueur, D., ... & Luan, D. T.',
    title: 'Effect of organic farming practices on soil health improvement of coconut farms',
    venue: 'Environmental Technology & Innovation',
    details: '38, 104067',
    url: 'https://www.sciencedirect.com/science/article/pii/S2352186425000537',
  },
  {
    id: 'pub-2025-3',
    year: 2025,
    type: 'journal',
    authors:
      'Nghia, N. K., Thy, C. T. A., Oanh, N. T. K., Xa, L. T., Morton, L. W., Demyan, M. S., ... & Tecimen, H. B.',
    title:
      'Isolation of biosurfactant-producing bacteria from dioxin-contaminated soil and their biodegradation capacity to dibenzofuran',
    venue: 'Biocatalysis and Agricultural Biotechnology',
    details: '64, 103490',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S1878818125000039',
  },
  {
    id: 'pub-2024-1',
    year: 2024,
    type: 'journal',
    authors:
      'Nguyen, N. K., Nguyen, P. M., Chau, A. T. T., Do, L. T., Nguyen, T. H. T., Tran, D. H. V., ... & Tecimen, H. B.',
    title:
      'Long-term changes in soil biological activity and other properties of raised beds in Longan orchards',
    venue: 'PeerJ',
    details: '12, e18396',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_5QkOpkAAAAJ&sortby=pubdate&citation_for_view=_5QkOpkAAAAJ:WA5NYHcadZ8C',
  },
  {
    id: 'pub-2024-2',
    year: 2024,
    type: 'journal',
    authors:
      'Nguyen, N. K., Schroll, R., Dörfler, U., Suhadolc, M., Gerhard, W., Tecimen, H. B., ... & Ying, D. T. Y.',
    title:
      'Linkage between glyphosate adsorption/desorption and mineralization in Central European agricultural soils',
    venue: 'Applied Geochemistry',
    details: '169, 106049',
  },
  {
    id: 'pub-2024-3',
    year: 2024,
    type: 'journal',
    authors: 'Ma, H., Tecimen, H. B., Wu, Y., Gao, R., & Yin, Y.',
    title:
      'Influence of litter and nitrogen addition on carbon and nitrogen levels in soil aggregates under a subtropical forest',
    venue: 'Journal of Soil Science and Plant Nutrition',
    details: '1–14',
    url: 'https://link.springer.com/article/10.1007/s42729-024-01889-5',
  },
  {
    id: 'pub-2024-4',
    year: 2024,
    type: 'journal',
    authors:
      'Nguyen, N. K., Vo, D. T. V., Le, T. X., Morton, L. W., Tran, H. T., Robatjazi, J., ... & Tecimen, H. B.',
    title:
      'Isolation and selection of indigenous potassium solubilizing bacteria from Vietnam Mekong Delta rhizospheric soils and their effects on diverse cropping systems',
    venue: 'Biocatalysis and Agricultural Biotechnology',
    details: '58, 103200',
    url: 'https://www.sciencedirect.com/science/article/pii/S1878818124001841',
  },
  {
    id: 'pub-2023-1',
    year: 2023,
    type: 'journal',
    authors: 'Goparaju, L., Pillulata, R. C. P., Suresh Babu, K. V., & Tecimen, H. B.',
    title: 'Forest fire emissions and their impact on global climate change',
    venue: 'Frontiers in Forests and Global Change',
    details: '6, 1188632',
    url: 'https://www.frontiersin.org/articles/10.3389/ffgc.2023.1188632/full',
  },
  {
    id: 'pub-2023-2',
    year: 2023,
    type: 'journal',
    authors:
      'Sharma, A., Sharma, J. C., Shukla, Y. R., Verma, M. L., Singh, U., Spehia, R. S., Sharma, D., Gautam, K. L., Dogra, R., Tecimen, H. B., & Kumar, M.',
    title:
      'Nutrient management influences root characteristics and nitrogen use efficiency in the vegetable-based agroecosystem in the Northwestern Himalayas',
    venue: 'Sustainability',
    details: '15(13), 10593',
    url: 'https://www.mdpi.com/2071-1050/15/13/10593',
  },
  {
    id: 'pub-2022-1',
    year: 2022,
    type: 'journal',
    authors: 'Xa, L. T., Nghia, N. K., & Tecimen, H. B.',
    title:
      'Environmental factors modulating indole-3-acetic acid biosynthesis by four nitrogen fixing bacteria in a liquid culture medium',
    venue: 'Environment and Natural Resources Journal',
    details: '20(3), 279–287 · DOI: 10.32526/ennrj/20/202100233',
    url: 'https://ph02.tci-thaijo.org/index.php/ennrj/article/view/246191',
  },
  {
    id: 'pub-2022-2',
    year: 2022,
    type: 'journal',
    authors: 'Xa, L. T., Tecimen, H. B., & Nghia, N. K.',
    title:
      'Organic material decomposition capacity of indigenous microorganism communities from different farming systems in Soc Trang province, Vietnam',
    venue: 'Asia-Pacific Journal of Science and Technology',
    details: '27(01)',
  },
  {
    id: 'pub-2022-3',
    year: 2022,
    type: 'journal',
    authors: 'Melnichuk, R. D., Tecimen, H. B., & Görres, J. H.',
    title:
      'Do the invasive earthworms Amynthas agrestis (Oligochaeta: Megascolecidae) and Lumbricus rubellus (Oligochaeta: Lumbricidae) stimulate oxalate-based browser defenses in Jack-in-the-Pulpit (Arisaema triphyllum) by their presence or their soil biogeochemical activity?',
    venue: 'Soil Systems',
    details: '6(1), 11',
    url: 'https://www.mdpi.com/2571-8789/6/1/11',
  },
  {
    id: 'pub-2022-4',
    year: 2022,
    type: 'journal',
    authors: 'Zha, Y. X., Faeflen, S. W., Zhou, X. B., Tecimen, H. B., Wright, A. L., & Jiang, X. J.',
    title:
      'Redox effect on carbon and nitrogen mineralization in the drawdown zone of the Three Gorges Reservoir',
    venue: 'International Journal of Environmental Science and Technology',
    details: '1–12',
    url: 'https://link.springer.com/article/10.1007/s13762-022-03950-1',
  },
  {
    id: 'pub-2022-5',
    year: 2022,
    type: 'journal',
    authors: 'Ma, H., Tecimen, H. B., Ma, F., Imran, S., Gao, R., Yin, Y., ... & Sun, J.',
    title:
      'Different responses of soil nitrogen to combined addition of labile carbon sources with fresh versus decomposed litter',
    venue: 'Journal of Plant Nutrition and Soil Science',
    url: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/jpln.202100303',
  },
  {
    id: 'pub-2021-1',
    year: 2021,
    type: 'journal',
    authors: 'Ma, H., Tecimen, H. B., Pei, G., Imran, S., Gao, R., & Yin, Y.',
    title: 'Effects of co-addition of ammonium, nitrite, and glucose with methionine on soil nitrogen',
    venue: 'Environmental Monitoring and Assessment',
    details: '193(6), 1–12',
    url: 'https://link.springer.com/article/10.1007/s10661-021-09109-8',
  },
  {
    id: 'pub-2021-2',
    year: 2021,
    type: 'journal',
    authors: 'Tecimen, H. B., Gorres, J. H., & Melnichuk, R. D.',
    title:
      'Effect of Lumbricus rubellus and Amynthas agrestis earthworms on soil biogeochemistry at the aggregate scale in northern hardwood forests',
    venue: 'Journal of Sustainable Forestry',
    details: '40(1), 83–98',
    url: 'https://www.tandfonline.com/doi/abs/10.1080/10549811.2020.1744452',
  },
  {
    id: 'pub-2020-1',
    year: 2020,
    type: 'journal',
    authors: 'Ma, H., Tecimen, H. B., Lin, W., Gao, R., Yin, Y., & Peng, Y.',
    title:
      'Role of soluble and exchangeable nitrogen pools in N cycling and the impact of nitrogen added in forest soil',
    venue: 'Environmental Science and Pollution Research',
    details: '27(5), 5398–5407',
    url: 'https://link.springer.com/article/10.1007/s11356-019-07316-y',
  },
  {
    id: 'pub-2020-2',
    year: 2020,
    type: 'journal',
    authors: 'Le Thi Xa, Nghia, N. K., & Tecimen, H. B.',
    title:
      'Organic material decomposition capacity of indigenous microorganism communities from different farming systems in Soc Trang province, Vietnam',
    venue: 'Proceedings of 2020 Vietnam National Conference on Biotechnology',
    details: 'pp. 594–600',
    url: 'http://huib.hueuni.edu.vn/wp-content/uploads/2020/12/594-600.pdf',
  },
  {
    id: 'pub-2019-1',
    year: 2019,
    type: 'journal',
    authors: 'Sevgi, E., Yılmaz, O. Y., Çobanoğlu Özyiğitoğlu, G., Tecimen, H. B., & Sevgi, O.',
    title:
      'Factors influencing epiphytic lichen species distribution in a managed Mediterranean Pinus nigra Arnold forest',
    venue: 'Diversity',
    details: '11(4), 59',
    url: 'https://www.mdpi.com/445810',
  },
  {
    id: 'pub-2019-2',
    year: 2019,
    type: 'journal',
    authors: 'Tecimen, H. B., Sevgi, O., Yılmaz, O. Y., Carus, S., Kavgacı, A., & Akburak, S.',
    title:
      'Estimation of forest litter fractions by regression analysis in different aged stands of Pinus nigra',
    venue: 'BOSQUE',
    details: '40(1), 41–48',
    url: 'http://revistas.uach.cl/index.php/bosque/article/view/5634',
  },
  {
    id: 'pub-2017-1',
    year: 2017,
    type: 'journal',
    authors: 'Oktay, S., & Tecimen, H. B.',
    title:
      'Nitrogen mineralization variation among tree species, incubation method and intrinsic soil properties',
    venue: 'Fresenius Environmental Bulletin',
    details: '5806',
    url: 'https://www.researchgate.net/profile/Vera-Vukanic/publication/320226321_A_CONTRIBUTION_TO_CHEMICAL_CONTAMINATION_OF_GROUNDWATER/links/59e0d8000f7e9b97fbdd120a/A-CONTRIBUTION-TO-CHEMICAL-CONTAMINATION-OF-GROUNDWATER.pdf#page=122',
  },
  {
    id: 'pub-2017-2',
    year: 2017,
    type: 'journal',
    authors: 'Tecimen, H. B., Sevgi, O., Akkaya, M., Sevgi, E., Hançer, Ç. K., & Çakir, E. A.',
    title:
      'Comparison of species richness and diversity at natural stands and plantations of Stone Pine (Pinus pinea L.)',
    venue: 'Pakistan Journal of Botany',
    details: '49(5), 1743–1748',
    url: 'http://www.pakbs.org/pjbot/papers/1507284409.pdf',
  },
  {
    id: 'pub-2016-1',
    year: 2016,
    type: 'journal',
    authors: 'Sevgi, O., Tecimen, H. B., Carus, S., Akburak, S., & Çaksir, E.',
    title:
      'Some bark characteristics of Black Pine (Pinus nigra Arnold.) and their variation throughout the tree height',
    venue: 'Journal of Environmental Biology',
    details: '37(6), 1347',
  },
  {
    id: 'pub-2013-1',
    year: 2013,
    type: 'journal',
    authors: 'Tecimen, H. B., Sevgi, O., Yurtseven, H., Sevgi, E., & Öztürk, M.',
    title:
      'Net nitrogen mineralization and nitrification rates in different land uses: An in situ incubation',
    venue: 'Fresenius Environmental Bulletin',
    details: '22(4a), 1173–1178',
    url: 'https://www.researchgate.net/profile/Hueseyin-Tecimen/publication/255181241_Net_nitrogen_mineralization_and_nitrification_rates_in_different_land_uses_An_in_situ_incubation/links/0deec5200f293077a5000000/Net-nitrogen-mineralization-and-nitrification-rates-in-different-land-uses-An-in-situ-incubation.pdf',
  },
  {
    id: 'pub-2012-1',
    year: 2012,
    type: 'journal',
    authors: 'Tecimen, H. B., Sevgi, O., & Altundağ, E.',
    title: 'Alteration of nitrogen mineralization along altitudinal gradient at Kaz Mountains',
    venue: 'Journal of the Faculty of Forestry, Istanbul University',
    details: '62(1), 19–30',
    url: 'https://forestist.org/en/alteration-of-nitrogen-mineralization-along-altitudinal-gradient-at-kaz-mountains-16515',
  },
  {
    id: 'pub-2012-2',
    year: 2012,
    type: 'journal',
    authors: 'Altundağ, E., Sevgi, E., Kara, Ö., Sevgi, O., Tecimen, H. B., & Bolat, İ.',
    title:
      'Studies on the chorology, ecology, morphology and conservation strategies of Orchis anatolica Boiss (Orchidaceae)',
    venue: 'Journal of Environmental Biology',
    details: '33(2), 325–333',
  },
  {
    id: 'pub-2012-3',
    year: 2012,
    type: 'journal',
    authors: 'Sevgi, E., Altundağ, E., Kara, Ö., Sevgi, O., Tecimen, H. B., & Bolat, İ.',
    title:
      'Morphological, anatomical and ecological studies on some Orchis (Orchidaceae) taxa of Mediterranean region, Turkey',
    venue: 'Journal of Environmental Biology',
    details: '33(2), 343–353',
  },
  {
    id: 'pub-2011-1',
    year: 2011,
    type: 'journal',
    authors: 'Tecimen, H. B., & Kavgaci, A.',
    title:
      'Evaluation of net nitrogen mineralization in Pinus brutia Ten. forests and maquis shrublands in Southern Turkey',
    venue: 'Fresenius Environmental Bulletin',
    details: '20(1), 385–390',
    url: 'https://www.researchgate.net/profile/Hueseyin-Tecimen/publication/255181314_Evaluation_of_net_nitrogen_mineralization_rates_at_Pinus_brutia_ten_forests_and_maquis_shrublands_in_Southern_Turkey/links/0c9605200f34259bca000000/Evaluation-of-net-nitrogen-mineralization-rates-at-Pinus-brutia-ten-forests-and-maquis-shrublands-in-Southern-Turkey.pdf',
  },
  {
    id: 'pub-2011-2',
    year: 2011,
    type: 'journal',
    authors: 'Tecimen, H. B., & Sevgi, O.',
    title:
      'Heating induced changes in mineral nitrogen and organic carbon in relation with temperature and time',
    venue: 'Journal of Environmental Biology',
    details: '32(3), 295–300',
  },
  {
    id: 'pub-2010-1',
    year: 2010,
    type: 'journal',
    authors: 'Tecimen, H. B., & Sevgi, O.',
    title:
      'Effects of fertilization on net nitrogen mineralization and nitrification rates at different land-use types: A laboratory incubation',
    venue: 'Fresenius Environmental Bulletin',
    details: '19(6), 1165–1170',
  },

  // Book Chapters (3)
  {
    id: 'chap-2024-1',
    year: 2024,
    type: 'chapter',
    authors: 'Sevgi, O., Ekşi, M., & Tecimen, H. B.',
    title: 'Kent Yeşil Alanları Toprak Bilgisi (Soil Science of Urban Green Spaces)',
    venue: 'IUC University Press',
    details: '2024/6, 156 pp.',
    url: 'https://www.researchgate.net/profile/Hueseyin-Tecimen/publication/381225538_Kent_Yesil_Alanlari_Toprak_Bilgisi/links/666358f7a54c5f0b94567403/Kent-Yesil-Alanlari-Toprak-Bilgisi.pdf',
  },
  {
    id: 'chap-2021-1',
    year: 2021,
    type: 'chapter',
    authors: 'Tecimen, H. B., Kavgacı, A., & Sevgi, O.',
    title: 'Forest Fires and Sustainability in the Mediterranean Ecosystems',
    venue: 'In: Biodiversity, Conservation and Sustainability in Asia',
    details: 'pp. 81–100 · Springer, Cham',
    url: 'https://link.springer.com/chapter/10.1007/978-3-030-59928-7_5',
  },
  {
    id: 'chap-2011-1',
    year: 2011,
    type: 'chapter',
    authors: 'Kavgaci, A., Čarni, A., Tecimen, H. B., & Özalp, G.',
    title: 'Phytosociological Structure of Iğneada Region in NW Thrace (Turkey)',
    venue: 'In: Natural Environment and Culture in the Mediterranean Region II',
    details: 'pp. 433–448 · Cambridge Scholars Publishing / GSE Research',
    url: 'https://doi.org/10.5848/CSP.3107.00032',
  },

  // Extension Publications (2)
  {
    id: 'ext-pub-1',
    year: 2025,
    type: 'extension',
    authors: 'Tecimen, H. B.',
    title: 'Assessing Land Suitability for Agroforestry',
    venue: 'TSU Cooperative Extension · Digital Scholarship',
    details: 'Extension Publication #202',
    url: 'https://digitalscholarship.tnstate.edu/extension/202',
  },
  {
    id: 'ext-pub-2',
    year: 2024,
    type: 'extension',
    authors: 'TSU Cooperative Extension',
    title: 'Growing American Ginseng (Panax quinquefolius L.) in Your Backyard Woods',
    venue: 'Tennessee State University Extension',
    details: 'Extension Guide (PDF)',
    url: 'https://www.tnstate.edu/extension/documents/Ginseng.pdf',
  },
]

export function formatCitation(pub: Publication): string {
  const detailsPart = pub.details ? `, ${pub.details}` : ''
  return `${pub.authors} (${pub.year}). ${pub.title}. ${pub.venue}${detailsPart}.`
}
