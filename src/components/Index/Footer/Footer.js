import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo_rotary from '../../../image/header/logo.png';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright
      </div>
     
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <a class="active" href="#home"><img 
                  src={logo_rotary}
                  alt='logo'
              /></a>
              
              <p>
                HTPerformance là một trang web chuyên cung cấp xe mô hình tỉ lệ 1:64
              </p>
              <p>
              © 2022 Copyright
              </p>
            </MDBCol>

            <MDBCol md="2" lg="3" xl="2" className='mx-auto mb-4'>
              <h6 className='fs-5 fw-bold mb-4'>Chăm sóc khách hàng</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Trung tâm trợ giúp
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Chính sách bảo hành
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Thanh toán
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Chăm sóc khách hàng
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Chính sách bảo hành
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='fs-5 fw-bold mb-4'>Về HTPERFORMANCE</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Về chúng tôi
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Chính sách bảo hành
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Điều khoản
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Dịch vụ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  HTPerformance Blog
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="2" className='mx-auto mb-md-0 mb-4'>
              <h6 className='fs-5 fw-bold mb-4'>Theo dõi chúng tôi</h6>
              <p>
                <MDBIcon  className="me-2" />
                Facebook
              </p>
              <p>
                <MDBIcon  className="me-2" />
                Twitter
              </p>
              <p>
                <MDBIcon  className="me-2" />
                Instagram
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      
    </MDBFooter>
  );
}