import Head from 'next/head'
import styles from 'styles/Environment.module.css'

export default function DevEnvironment() {
  return (
    <div>
      <Head>
        <title>Environment</title>
        <meta name="description" content="salmaan saeed's dev environment" />
      </Head>
      <main>
        <h1> Environment </h1>
		<p>
			The environment I work on.
		</p>
		<p className={styles.blue}>
			Blue
		</p>
      </main>
    </div>
  )
}

