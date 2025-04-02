import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button"; // Adjust path if needed
import { dummyInterviews } from '@/constants';
import Interviewcard from '@/components/Interviewcard';

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI - Powered Practice & Feedback</h2>

          <p className="text-lg">Practice on real interview questions.</p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      {/* Section for Your Interviews */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your interviews</h2>

        <div className="interviews-section">
          {dummyInterviews.length > 0 ? (
            dummyInterviews.map((interview) => (
              <Interviewcard key={interview.id} {...interview} />
            ))
          ) : (
            <p>You haven't taken any interviews yet.</p>
          )}
        </div>
      </section>

      {/* Section for Taking a New Interview */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <Interviewcard key={interview.id} {...interview} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
