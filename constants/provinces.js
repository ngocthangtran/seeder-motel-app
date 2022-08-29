const provinces = [
  {
    provinceId: '01',
    name: 'Thành phố Hà Nội',
    type: 'Thành phố Trung ương',
  },
  {
    provinceId: '02',
    name: 'Tỉnh Hà Giang',
    type: 'Tỉnh',
  },
  {
    provinceId: '04',
    name: 'Tỉnh Cao Bằng',
    type: 'Tỉnh',
  },
  {
    provinceId: '06',
    name: 'Tỉnh Bắc Kạn',
    type: 'Tỉnh',
  },
  {
    provinceId: '08',
    name: 'Tỉnh Tuyên Quang',
    type: 'Tỉnh',
  },
  {
    provinceId: '10',
    name: 'Tỉnh Lào Cai',
    type: 'Tỉnh',
  },
  {
    provinceId: '11',
    name: 'Tỉnh Điện Biên',
    type: 'Tỉnh',
  },
  {
    provinceId: '12',
    name: 'Tỉnh Lai Châu',
    type: 'Tỉnh',
  },
  {
    provinceId: '14',
    name: 'Tỉnh Sơn La',
    type: 'Tỉnh',
  },
  {
    provinceId: '15',
    name: 'Tỉnh Yên Bái',
    type: 'Tỉnh',
  },
  {
    provinceId: '17',
    name: 'Tỉnh Hoà Bình',
    type: 'Tỉnh',
  },
  {
    provinceId: '19',
    name: 'Tỉnh Thái Nguyên',
    type: 'Tỉnh',
  },
  {
    provinceId: '20',
    name: 'Tỉnh Lạng Sơn',
    type: 'Tỉnh',
  },
  {
    provinceId: '22',
    name: 'Tỉnh Quảng Ninh',
    type: 'Tỉnh',
  },
  {
    provinceId: '24',
    name: 'Tỉnh Bắc Giang',
    type: 'Tỉnh',
  },
  {
    provinceId: '25',
    name: 'Tỉnh Phú Thọ',
    type: 'Tỉnh',
  },
  {
    provinceId: '26',
    name: 'Tỉnh Vĩnh Phúc',
    type: 'Tỉnh',
  },
  {
    provinceId: '27',
    name: 'Tỉnh Bắc Ninh',
    type: 'Tỉnh',
  },
  {
    provinceId: '30',
    name: 'Tỉnh Hải Dương',
    type: 'Tỉnh',
  },
  {
    provinceId: '31',
    name: 'Thành phố Hải Phòng',
    type: 'Thành phố Trung ương',
  },
  {
    provinceId: '33',
    name: 'Tỉnh Hưng Yên',
    type: 'Tỉnh',
  },
  {
    provinceId: '34',
    name: 'Tỉnh Thái Bình',
    type: 'Tỉnh',
  },
  {
    provinceId: '35',
    name: 'Tỉnh Hà Nam',
    type: 'Tỉnh',
  },
  {
    provinceId: '36',
    name: 'Tỉnh Nam Định',
    type: 'Tỉnh',
  },
  {
    provinceId: '37',
    name: 'Tỉnh Ninh Bình',
    type: 'Tỉnh',
  },
  {
    provinceId: '38',
    name: 'Tỉnh Thanh Hóa',
    type: 'Tỉnh',
  },
  {
    provinceId: '40',
    name: 'Tỉnh Nghệ An',
    type: 'Tỉnh',
  },
  {
    provinceId: '42',
    name: 'Tỉnh Hà Tĩnh',
    type: 'Tỉnh',
  },
  {
    provinceId: '44',
    name: 'Tỉnh Quảng Bình',
    type: 'Tỉnh',
  },
  {
    provinceId: '45',
    name: 'Tỉnh Quảng Trị',
    type: 'Tỉnh',
  },
  {
    provinceId: '46',
    name: 'Tỉnh Thừa Thiên Huế',
    type: 'Tỉnh',
  },
  {
    provinceId: '48',
    name: 'Thành phố Đà Nẵng',
    type: 'Thành phố Trung ương',
  },
  {
    provinceId: '49',
    name: 'Tỉnh Quảng Nam',
    type: 'Tỉnh',
  },
  {
    provinceId: '51',
    name: 'Tỉnh Quảng Ngãi',
    type: 'Tỉnh',
  },
  {
    provinceId: '52',
    name: 'Tỉnh Bình Định',
    type: 'Tỉnh',
  },
  {
    provinceId: '54',
    name: 'Tỉnh Phú Yên',
    type: 'Tỉnh',
  },
  {
    provinceId: '56',
    name: 'Tỉnh Khánh Hòa',
    type: 'Tỉnh',
  },
  {
    provinceId: '58',
    name: 'Tỉnh Ninh Thuận',
    type: 'Tỉnh',
  },
  {
    provinceId: '60',
    name: 'Tỉnh Bình Thuận',
    type: 'Tỉnh',
  },
  {
    provinceId: '62',
    name: 'Tỉnh Kon Tum',
    type: 'Tỉnh',
  },
  {
    provinceId: '64',
    name: 'Tỉnh Gia Lai',
    type: 'Tỉnh',
  },
  {
    provinceId: '66',
    name: 'Tỉnh Đắk Lắk',
    type: 'Tỉnh',
  },
  {
    provinceId: '67',
    name: 'Tỉnh Đắk Nông',
    type: 'Tỉnh',
  },
  {
    provinceId: '68',
    name: 'Tỉnh Lâm Đồng',
    type: 'Tỉnh',
  },
  {
    provinceId: '70',
    name: 'Tỉnh Bình Phước',
    type: 'Tỉnh',
  },
  {
    provinceId: '72',
    name: 'Tỉnh Tây Ninh',
    type: 'Tỉnh',
  },
  {
    provinceId: '74',
    name: 'Tỉnh Bình Dương',
    type: 'Tỉnh',
  },
  {
    provinceId: '75',
    name: 'Tỉnh Đồng Nai',
    type: 'Tỉnh',
  },
  {
    provinceId: '77',
    name: 'Tỉnh Bà Rịa - Vũng Tàu',
    type: 'Tỉnh',
  },
  {
    provinceId: '79',
    name: 'Thành phố Hồ Chí Minh',
    type: 'Thành phố Trung ương',
  },
  {
    provinceId: '80',
    name: 'Tỉnh Long An',
    type: 'Tỉnh',
  },
  {
    provinceId: '82',
    name: 'Tỉnh Tiền Giang',
    type: 'Tỉnh',
  },
  {
    provinceId: '83',
    name: 'Tỉnh Bến Tre',
    type: 'Tỉnh',
  },
  {
    provinceId: '84',
    name: 'Tỉnh Trà Vinh',
    type: 'Tỉnh',
  },
  {
    provinceId: '86',
    name: 'Tỉnh Vĩnh Long',
    type: 'Tỉnh',
  },
  {
    provinceId: '87',
    name: 'Tỉnh Đồng Tháp',
    type: 'Tỉnh',
  },
  {
    provinceId: '89',
    name: 'Tỉnh An Giang',
    type: 'Tỉnh',
  },
  {
    provinceId: '91',
    name: 'Tỉnh Kiên Giang',
    type: 'Tỉnh',
  },
  {
    provinceId: '92',
    name: 'Thành phố Cần Thơ',
    type: 'Thành phố Trung ương',
  },
  {
    provinceId: '93',
    name: 'Tỉnh Hậu Giang',
    type: 'Tỉnh',
  },
  {
    provinceId: '94',
    name: 'Tỉnh Sóc Trăng',
    type: 'Tỉnh',
  },
  {
    provinceId: '95',
    name: 'Tỉnh Bạc Liêu',
    type: 'Tỉnh',
  },
  {
    provinceId: '96',
    name: 'Tỉnh Cà Mau',
    type: 'Tỉnh',
  },
];
module.exports = { provinces };
