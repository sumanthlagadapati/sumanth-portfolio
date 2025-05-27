import React from "react";

export default function Portfolio() {
  return (
    <main className="p-8 max-w-4xl mx-auto space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Sumanth L</h1>
        <p className="text-sm text-gray-600">Herndon, VA | sumanthlagadapati@gmail.com | (571) 430-8693</p>
        <a href="https://linkedin.com/in/sumanthlagadapati" className="text-blue-600 underline">
          LinkedIn Profile
        </a>
      </header>

      <section>
        <h2 className="text-2xl font-semibold">Professional Summary</h2>
        <p>
          Infrastructure and DevOps Engineer with 9+ years of experience designing, automating, and scaling
          high-performance cloud environments. Proven success in building secure, cost-efficient, and developer-friendly
          infrastructure systems across GCP, AWS, and Azure.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Technical Skills</h2>
        <ul className="list-disc list-inside">
          <li>Cloud: GCP, AWS, Azure</li>
          <li>IaC: Terraform, Helm, GitOps</li>
          <li>Containers: Docker, Kubernetes</li>
          <li>Monitoring: Prometheus, Grafana, Datadog</li>
          <li>Languages: Python, Bash, Go</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Professional Experience</h2>
        <p><strong>Accenture Federal Services</strong> - Infrastructure Engineer / DevOps & SRE (2019–Present)</p>
        <p><strong>Wells Fargo</strong> - Cloud Platform Engineer (2018–2019)</p>
        <p><strong>Lennox International</strong> - DevOps & ETL Engineer (2016–2018)</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>AWS Certified Solutions Architect – Associate</li>
          <li>Lean Six Sigma White Belt</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="list-disc list-inside">
          <li>M.S. in IT Project Management – Campbellsville University</li>
          <li>M.S. in Electrical Engineering – SF Bay University</li>
        </ul>
      </section>
    </main>
  );
}
