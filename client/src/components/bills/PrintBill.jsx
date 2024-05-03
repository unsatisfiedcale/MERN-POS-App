import React from "react";
import { Modal, Select } from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Fatura Yazdır "
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
      
    >
      <section className="py-20 bg-black">
        <div className="max-w-5xl max-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo">
              <h2 className="text-4xl font-bold text-slate-700 my-6">LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid grid-cols-4 gap-12">
                <div className="text-md text-slate-500">
                  <p className="font-bold ">Fatura Detayı: </p>
                  <p>Unwrapped</p>
                  <p>Fake Street 123</p>
                  <p>San Javier</p>
                  <p>CA 1234</p>
                </div>
                <div className="text-md text-slate-500">
                  <p className="font-bold ">Fatura: </p>
                  <p>The Boring Company</p>
                  <p>Tesla Street 007</p>
                  <p>Frisco</p>
                  <p>CA 0000</p>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                  <p className="font-bold ">Fatura Numarası: </p>
                  <p>00041</p>
                  </div>
                  <div>
                  <p className="font-bold ">Veriliş Tarihi: </p>
                  <p>04-03-2024</p>
                  </div>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                  <p className="font-bold ">Şartlar </p>
                  <p>10 Gün</p>
                  </div>
                  <div>
                  <p className="font-bold ">Vade: </p>
                  <p>17-06-2024</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Modal>
  );
};

export default PrintBill;
