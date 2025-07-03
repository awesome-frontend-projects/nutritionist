"use client";

import { pricingTable } from "@/data/data";
import { RiCheckLine, RiCloseLine } from "@remixicon/react";
import React from "react";
//import motion
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/lib/motion";

const Table = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.div variants={fadeIn} className="overflow-x-auto">
          <table className="min-w-full w-max text-sm border-collapse">
            <thead>
              <tr>
                {pricingTable.titles.map((title, idx) => (
                  <th
                    key={idx}
                    className="border border-green-80 px-4 py-3 text-left font-semibold bg-dark-green-20 text-white"
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {pricingTable.rows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {/* Feature label */}
                  <td className="border border-green-85 px-4 py-3">
                    {row.feature}
                  </td>

                  {/* Availability icons */}
                  {row.availability.map((available, colIdx) => (
                    <td
                      key={colIdx}
                      className="border border-green-85 px-4 py-3 text-center"
                    >
                      {available ? (
                        <RiCheckLine className="inline-block w-5 h-5 bg-green-70 rounded-sm p-0.5" />
                      ) : (
                        <RiCloseLine className="inline-block w-5 h-5 bg-green-90 rounded-sm p-0.5" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Table;
