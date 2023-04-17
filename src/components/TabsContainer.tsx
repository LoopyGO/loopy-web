'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { Container } from './ui/Container'
import { Card } from './ui/Card'
import { Button } from './ui/Button'
import Image from 'next/image'
import Gold3 from '@/public/badges/gold3.svg'

export function TabsContainer() {
  return (
    <Container className="xl:h-[540px] h-[890px] w-full p-0 overflow-hidden ">
      <Tabs.Root
        defaultValue="carrear"
        className="flex w-full flex-col xl:flex-row justify-between h-full"
      >
        <div className="flex flex-col w-full xl:w-[740px] py-8 pl-6 gap-4 h-full justify-start items-start">
          <div className="overflow-hidden w-full h-max py-2">
            <Tabs.List className="flex items-center w-full justify-start gap-2  whitespace-nowrap">
              <Tabs.Trigger value="carrear" asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="data-[state=active]:btn-active hover:bg-base-5 hover:text-base-12"
                >
                  Carreira
                </Button>
              </Tabs.Trigger>
            </Tabs.List>
          </div>

          <Tabs.Content
            value="carrear"
            className="h-2/3 flex flex-col data-[state=inactive]:hidden"
          >
            <Tabs.List className="relative">
              <div className="pointer-events-none absolute bottom-14 z-40 h-24 w-full bg-gradient-to-b to-base-2 from-transparent to-70%" />
              <div className="h-[540px] relative pb-40 pt-2 flex pr-6 flex-col gap-4 overflow-y-scroll">
                <Tabs.Trigger value="frontend" asChild>
                  <Card
                    title="Trilha Frontend"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
                    href="/"
                    progress={50}
                    status="unlocked"
                    size="sm"
                  />
                </Tabs.Trigger>
                <Tabs.Trigger value="frontend" asChild>
                  <Card
                    title="Trilha Frontend"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
                    href="/"
                    progress={50}
                    status="unlocked"
                    size="sm"
                  />
                </Tabs.Trigger>
                <Tabs.Trigger value="frontend" asChild>
                  <Card
                    title="Trilha Frontend"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
                    href="/"
                    progress={50}
                    status="unlocked"
                    size="sm"
                  />
                </Tabs.Trigger>
                <Tabs.Trigger value="frontend" asChild>
                  <Card
                    title="Trilha Frontend"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
                    href="/"
                    progress={50}
                    status="unlocked"
                    size="sm"
                  />
                </Tabs.Trigger>
                <Tabs.Trigger value="backend" asChild>
                  <Card
                    title="Trilha Backend"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
                    href="/"
                    progress={22}
                    status="unlocked"
                    size="sm"
                  />
                </Tabs.Trigger>
                <Tabs.Trigger value="flutter" asChild>
                  <Card
                    title="Trilha Flutter"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
                    href="/"
                    progress={0}
                    status="unlocked"
                    size="sm"
                  />
                </Tabs.Trigger>
              </div>
            </Tabs.List>
          </Tabs.Content>
          <Tabs.Content
            value="frontend"
            className="h-full flex flex-col items-center justify-between  relative data-[state=inactive]:hidden pr-6 gap-4"
          >
            <div className="h-full w-full flex flex-col items-start justify-center gap-8">
              <div>
                <h1 className="text-2xl font-bold">Trilha Frontend</h1>
                <p className="text-base-11 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              <div className="w-full h-full max-h-44 rounded-lg bg-base-3 flex flex-col items-center justify-center py-4 px-6">
                <div>
                  <h1 className="text-base-11 text-sm">Proxima Recompensa</h1>
                </div>
                <div className="h-full w-full flex items-center justify-between">
                  <Image src={Gold3} width={80} height={80} alt="medal" className="opacity-30" />
                  <Image src={Gold3} width={100} height={100} alt="medal" />
                  <Image src={Gold3} width={80} height={80} alt="medal" className="opacity-30" />
                </div>
              </div>
            </div>
            <Button variant="primary" size="md" fullWidth className="active:scale-95">
              Iniciar Trilha
            </Button>
          </Tabs.Content>
        </div>
        <div className="bg-base-3 w-full h-full">
          <Tabs.Content
            value="frontend"
            className="data-[state=inactive]:hidden overflow-y-scroll h-full grid grid-cols-1 2xl:grid-cols-2 gap-4 p-6"
          >
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
          </Tabs.Content>
          <Tabs.Content
            value="backend"
            className="data-[state=inactive]:hidden overflow-y-scroll h-full grid grid-cols-1 2xl:grid-cols-2 gap-4 p-6"
          >
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
          </Tabs.Content>
          <Tabs.Content
            value="flutter"
            className="data-[state=inactive]:hidden overflow-y-scroll h-full grid grid-cols-1 2xl:grid-cols-2 gap-4 p-6"
          >
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
            <Card
              title="Module 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/"
              progress={100}
              status="unlocked"
              size="sm"
            />
          </Tabs.Content>
          {/* CONTENT ABAIXO A FAZER */}
          <Tabs.Content
            value="solo"
            className="data-[state=inactive]:hidden flex w-full h-full items-center justify-center"
          >
            <Card
              title="Work in progress"
              description=""
              href="/dashboard"
              progress={100}
              status="locked"
              size="sm"
            />
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </Container>
  )
}
