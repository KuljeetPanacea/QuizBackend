// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// async function main() {
//   // Create a category
//   const category = await prisma.category.create({
//     data: { name: "Governance" },
//   });

//   // Add questions to the category
//   const questions = [
//     {
//       text: "Do you have an established process in place to monitor and respond to the evolving ESG regulatory landscape?",
//     },
//     {
//       text: "Does your organization have a single individual, function, or working group with a defined governance structure in place for oversight of ESG reporting (voluntary or regulated), including ownership of an ESG report (if one exists)?",
//     },
//     {
//       text: "Is there a clear chain of command or hierarchy for ESG decision-making within your organization?",
//     },
//     {
//       text: "Is there board-level oversight of climate-related impacts, risks and/or opportunities within your organization?",
//     },
//     {
//       text: "Does your organization have any board members with experience over ESG-related issues?",
//     },
//     {
//       text: "Are ESG-related risks and opportunities currently assessed as part of your ongoing Enterprise Risk Management (ERM) framework?",
//     },
//     {
//       text: "Has your organization established a cross-functional working group or other established communication channels between the sustainability function(s) and other business units (e.g., financial reporting, internal audit, legal), with documented roles and responsibilities?",
//     },
//     {
//       text: "If your organization has publicly disclosed climate-related targets, goals, or transition plans, does your organization have an oversight process of progress made toward those climate-related targets, goals, or transition plans?",
//     },
//     {
//       text: "Is there a budget allocated specifically for ESG reporting and compliance?",
//     },
//   ];

//   for (const question of questions) {
//     await prisma.question.create({
//       data: {
//         text: question.text,
//         categoryId: category.id,
//       },
//     });
//   }

//   console.log("Database seeded!");
// }

// main()
//   .catch((e) => console.error(e))
//   .finally(async () => {
//     await prisma.$disconnect();
//   });




const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create categories
  const governanceCategory = await prisma.category.create({
    data: { name: "Governance" },
  });

  const materialityCategory = await prisma.category.create({
    data: { name: "Materiality Assessment" },
  });

  const esgStrategyCategory = await prisma.category.create({
    data: { name: "ESG Strategy" },
  });

  const climateGHGCategory = await prisma.category.create({
    data: { name: "Climate: GHG" },
  });

  const peopleSocialCategory = await prisma.category.create({
    data: { name: "People/Social" },
  });

  const dataProcessesCategory = await prisma.category.create({
    data: { name: "Data, Processes, and Controls" },
  });

  const reportingDisclosureCategory = await prisma.category.create({
    data: { name: "Reporting and Disclosure" },
  });

  const technologyESGReportingCategory = await prisma.category.create({
    data: { name: "Technology for ESG Reporting" },
  });

  // Add questions to Governance category
  const governanceQuestions = [
    {
      text: "Do you have an established process in place to monitor and respond to the evolving ESG regulatory landscape?",
    },
    {
      text: "Does your organization have a single individual, function, or working group with a defined governance structure in place for oversight of ESG reporting (voluntary or regulated), including ownership of an ESG report (if one exists)?",
    },
    {
      text: "Is there a clear chain of command or hierarchy for ESG decision-making within your organization?",
    },
    {
      text: "Is there board-level oversight of climate-related impacts, risks and/or opportunities within your organization?",
    },
    {
      text: "Does your organization have any board members with experience over ESG-related issues?",
    },
    {
      text: "Are ESG-related risks and opportunities currently assessed as part of your ongoing Enterprise Risk Management (ERM) framework?",
    },
    {
      text: "Has your organization established a cross-functional working group or other established communication channels between the sustainability function(s) and other business units (e.g., financial reporting, internal audit, legal), with documented roles and responsibilities?",
    },
    {
      text: "If your organization has publicly disclosed climate-related targets, goals, or transition plans, does your organization have an oversight process of progress made toward those climate-related targets, goals, or transition plans?",
    },
    {
      text: "Is there a budget allocated specifically for ESG reporting and compliance?",
    },
  ];

  for (const question of governanceQuestions) {
    await prisma.question.create({
      data: {
        text: question.text,
        categoryId: governanceCategory.id,
      },
    });
  }

  // Add questions to Materiality Assessment category
  const materialityQuestions = [
    {
      text: "Have you ever performed an ESG materiality assessment?",
    },
    {
      text: "If you haven’t performed an ESG materiality assessment before, do you have plans to conduct one in the next 1-2 years? Or if you have performed an assessment in the past, do you have an expectation to update it in the next 1-2 years?",
    },
    {
      text: "Do you have an understanding of which ESG topics are material to your business and critical stakeholders?",
    },
    {
      text: "If you have public facing ESG disclosures, do you have a formalized process for determining which topics are reported on?",
    },
    {
      text: "Have you performed a scoping assessment to understand if you are subject to double materiality, as required by the EU’s Corporate Sustainability Reporting Directive (CSRD)?",
    },
    {
      text: "Do you have an understanding of the different materiality definitions across the various ESG disclosure rules which your organization may be subject to (e.g., SEC, CSRD, ISSB)?",
    },
    {
      text: "Do you have a process established for engaging with your key internal and/or external stakeholders?",
    },
    {
      text: "Do you regularly monitor and report on key environmental or social performance indicators (e.g., Greenhouse gas emissions, DEI)?",
    },
    {
      text: "Do you have a process established to assess how potential risks and opportunities manifest in various parts of your value chain (e.g., customers, suppliers, business partners, investors)?",
    },
  ];

  for (const question of materialityQuestions) {
    await prisma.question.create({
      data: {
        text: question.text,
        categoryId: materialityCategory.id,
      },
    });
  }

  // Add questions to ESG Strategy category
  const esgStrategyQuestions = [
    {
      text: "Has your organization set specific ESG targets, goals, or commitments or implemented ESG policies or programs (e.g., Net Zero, carbon neutral, DEI commitments or implemented ESG policies or programs)?",
    },
    {
      text: "Has the company considered ESG events or conditions that may impact risk management, business models, operations and processes, supply chain, and the ability to raise financing or attract customers?",
    },
    {
      text: "Are strategies to achieve ESG targets, goals, or commitments (e.g., Net Zero, carbon neutral, DEI commitments) integrated into managements and leadership’s decision-making and reflected in external reporting and strategic communications?",
    },
    {
      text: "Does your company have any public facing climate or GHG emissions goals (e.g., product commitments, product level claims, certifications being promoted on your products) and a defined timeline for those goals?",
    },
    {
      text: "Has your company developed and/or set science-based targets established by the Science Based Targets initiative (SBTi)?",
    },
    {
      text: "Do you benchmark your sustainability performance, including any ESG targets, goals, and progress, against peers/the market?",
    },
    {
      text: "Do you have a process established to track and report on progress towards reaching ESG commitments such as net zero, carbon neutral, and DEI commitments?",
    },
    {
      text: "Does your organization’s strategy include a climate transition plan to account for the industry and market’s shift to a low-carbon economy?",
    },
    {
      text: "Have you implemented initiatives to optimize resource efficiency and reduce waste generation or water conservation?",
    },
  ];

  for (const question of esgStrategyQuestions) {
    await prisma.question.create({
      data: {
        text: question.text,
        categoryId: esgStrategyCategory.id,
      },
    });
  }

  // Add questions to Climate: GHG category
  const climateGHGQuestions = [
    {
      text: "Has your company performed a Scope 1 (all direct greenhouse gas (GHG) emissions) and Scope 2 (indirect GHG emissions from purchased power for energy use) GHG inventory calculation for your most recent fiscal year?",
    },
    {
      text: "Has your company assessed the relevancy of Scope 3 emissions categories?",
    },
    {
      text: "If considered relevant, has your company calculated the inventory for material Scope 3 categories?",
    },
    {
      text: "Do you have a greenhouse gas Inventory Management Plan (IMP) in place that references internal controls implemented in your data collection process?",
    },
    {
      text: "Have you identified where you are already reporting GHG emissions data (e.g., ESG report, CDP, investor reports, etc.)?",
    },
    {
      text: "Has your company performed one-time physical and transition risk and opportunity assessment and scenario analysis [e.g., in line with the recommendations of the Task Force on Climate-related Disclosures (TCFD) which have been incorporated into emerging regulations and standards globally]?",
    },
    {
      text: "Has your company identified GHG key performance indicators (KPIs) and measurement approaches for material topics in accordance with recognized standards and frameworks (e.g., SASB or GRI)?",
    },
    {
      text: "Does your company follow any established standards (e.g., GHG Protocol) to calculate emissions?",
    },
    {
      text: "Has your company evaluated GHG legislation and regulatory requirements and determined when these compliance requirements will impact your company (e.g., finalized California Climate Legislation – SB 253, SB 261; New York Senate Bill proposed climate legislation 897A and 5437, or the SEC climate rule)?",
    },
  ];

  for (const question of climateGHGQuestions) {
    await prisma.question.create({
      data: {
        text: question.text,
        categoryId: climateGHGCategory.id,
      },
    });
  }

  // Add questions to People/Social category
  const peopleSocialQuestions = [
    {
      text: "Do you use your Company’s ESG practices and goals to help your organization with talent attraction and retention (i.e., training, employee health and safety, diversity, equity, and inclusion)?",
    },
    {
      text: "Does your organization’s employee education and training include training on diversity, equity, and inclusion (e.g., preventing unconscious bias)?",
    },
    {
      text: "Does your organization engage in social impact activities that may either directly or indirectly impact employees and the communities in which they live?",
    },
    {
      text: "Have you implemented initiatives to promote ESG awareness and education among employees?",
    },
    {
      text: "Is there a formal process for employees to provide feedback on internal workforce practices or practices within the organization’s value chain?",
    },
    {
      text: "Does your organization engage with and consider the impact of your business practices on local communities (e.g., people or group(s) living near your organization’s operations)?",
    },
    {
      text: "Are employees educated about the social impact of the organization's operations?",
    },
    {
      text: "Does your organization have processes in place to evaluate any potential ESG-related issues in your value chain (e.g., potential impacts to human rights)?",
    },
    {
      text: "Does your organization have processes in place to collect and report on employee data related to your ESG goals (e.g., diversity metrics, health and safety metrics)?",
    },
  ];

  for (const question of peopleSocialQuestions) {
    await prisma.question.create({
      data: {
        text: question.text,
        categoryId: peopleSocialCategory.id,
      },
    });
  }

  // Add questions to Data, Processes, and Controls category
  const dataProcessesQuestions = [
    {
      text: "Do you have any formalized ESG reporting processes and/or risk and control lists or matrices to facilitate the monitoring of relevant data collection?",
    },
    {
      text: "Do you have a formalized and documented process for collecting ESG data (e.g., GHG emissions data, diversity metrics)?",
    },
    {
      text: "Is the data collected from various sources standardized and consistent?",
    },
    {
      text: "Have any gaps in your current process for collecting, reviewing, and reporting on ESG data in the process of remediation?",
    },
    {
      text: "Are there automated processes in place to enhance the efficiency and accuracy of data processing?",
    },
    {
      text: "Are there control procedures performed to ensure the completeness and accuracy of data and disclosures?",
    },
    {
      text: "Is your Scope 1 & 2 GHG emissions data subject to assurance?",
    },
    {
      text: "Is any Scope 3 GHG emissions data subject to assurance?",
    },
    {
      text: "Is any ESG information that is not-GHG emissions data subject to assurance? (e.g., GRI disclosures)",
    },
  ];

  for (const question of dataProcessesQuestions) {
    await prisma.question.create({
      data: {
        text: question.text,
        categoryId: dataProcessesCategory.id,
      },
    });
  }

  // Add questions to Reporting and Disclosure category
  const reportingDisclosureQuestions = [
    {
      text: "Do you currently issue public facing sustainability information or report(s) (e.g., Sustainability Report, ESG Report, information on your website)?",
    },
    {
      text: "Are you currently reporting under any leading ESG standards/frameworks (e.g., GHG Protocol, SASB, TCFD, GRI)?",
    },
    {
      text: "Is reported ESG information based on criteria that are consistently applied from period to period?",
    },
    {
      text: "Have you received questions on your current disclosure/lack of disclosure from investors or other stakeholders and begun incorporating their questions into your ESG strategy?",
    },
    {
      text: "If you have a public ESG report, do you receive verification over any metrics or disclosures included in your report?",
    },
    {
      text: "If you have a public ESG report, do you receive assurance over any metrics or disclosures included in your report?",
    },
    {
      text: "Do you have a mechanism established to assess ESG reporting regulations and adoption timelines for your organization?",
    },
    {
      text: "Have you identified any inherent climate-related risks with the potential to have a substantive financial or strategic impact on your business?",
    },
    {
      text: "If the entity disclosed climate-related information within the entity’s annual ‘ESG’ report, are those disclosures consistent with the audited financial statements?",
    },
  ];

  for (const question of reportingDisclosureQuestions) {
    await prisma.question.create({
      data: {
        text: question.text,
        categoryId: reportingDisclosureCategory.id,
      },
    });
  }

  // Add questions to Technology for ESG Reporting category
  const technologyESGReportingQuestions = [
    {
      text: "Do you currently use any systems (internally and/or externally) to gather GHG emissions data?",
    },
    {
      text: "Do you currently use any tools and technology (internally and externally) for ESG reporting?",
    },
    {
      text: "If you use any technology for ESG reporting, does it provide direct access to data or reports for stakeholders (e.g., investors, customers)?",
    },
    {
      text: "Do you have systems in place to track ESG data that will allow for efficient data aggregation, assessment, and reporting?",
    },
    {
      text: "Are ESG metrics tracked across various business functions (e.g., energy consumption, waste reduction, diversity metrics)?",
    },
    {
      text: "Are you actively considering adopting emerging technologies such as blockchain or AI for ESG reporting?",
    },
    {
      text: "Do you have dedicated software or tools for managing ESG disclosures and compliance across regions and jurisdictions?",
    },
    {
      text: "Do you regularly assess the performance of your ESG reporting technology stack for efficiency and effectiveness?",
    },
    {
      text: "Do you use third-party technology providers for gathering ESG data or managing ESG reports?",
    },
  ];

  for (const question of technologyESGReportingQuestions) {
    await prisma.question.create({
      data: {
        text: question.text,
        categoryId: technologyESGReportingCategory.id,
      },
    });
  }

  console.log("Database seeded!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
