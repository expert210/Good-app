// pages/index.js
'use client';
import Head from 'next/head';
import styles from './styles/home.module.css';
import { Input, Heading, Text, Avatar, Kbd } from '@medusajs/ui';
import { TriangleRightMini } from '@medusajs/icons';
import { useState } from 'react';
import SubmitAppModal from './component/SubmitAppModal'

export default function Home() {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Goood.app</title>
        <meta
          name="description"
          content="Actual goood mobile design inspiration"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Avatar
          src="https://pbs.twimg.com/profile_images/1775517301221023744/XNXL4J46_400x400.png"
          fallback="Goood.app"
          variant="squared"
          className={styles.logoImg}
        />
        <Heading className={styles.pageTitle}>Stay in the loop</Heading>
        <Text className={styles.text}>
          We hope to launch soon, want to be the first to get in and explore?
          Make sure to leave your email so we can let you know when it’s
          ready...
        </Text>
        <div style={{ position: 'relative', display: 'block' }}>
          <Input
            placeholder="Email address"
            type="email"
            id="input-id"
            className={styles.input}
          />
          <Kbd
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            ⏎
          </Kbd>
        </div>
        <a href="#">
          <Text
            onClick={() => setIsAppModalOpen(true)}
            weight="plus"
            size="small"
          >
            Submit your app{' '}
            <TriangleRightMini style={{ display: 'inline-block' }} />
          </Text>
        </a>
      </main>
      {/* app modal */}
      <SubmitAppModal open={isAppModalOpen} setIsAppModalOpen={setIsAppModalOpen} />
    </div>
  );
}
