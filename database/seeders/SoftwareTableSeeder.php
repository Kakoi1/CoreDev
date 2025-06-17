<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SoftwareTableSeeder extends Seeder
{
    public function run()
    {
        $softwareData = [
          [
            'image'=> "hris.png",
            'name'=> "Orange Pay Plus (HRIS)",
            'category'=> "software",
            'description'=>
                "Your all in one HR Solutions System is here! Go paperless with your HR files and expedite your payroll process. Subscribe to OrangePay+ (HRIS) now.",
            'feature'=> json_encode([
                "Stand alone system",
                "A complete paperless HR Management Solutions for SMBs and Enterprise Businesses.",
                "Complete ease on managing employee info and payroll computation",
                "Convenient employee access to their info and payslip",
                "And many other very helpful features",
            ]),
          ],
        [
            'image'=> "eservices.png",
            'name'=> "E-Services Portal",
            'category'=> "software",
            'description'=>
                "Provide your members/clients the access to monitor their accounts and send loan applications online securely at their most convenient time and place. Use E-Services Portal now!",
            'feature'=> json_encode([
                "Real time inquiry of Accounts (Loans and Deposits)",
                "View and Print Statement of Accounts",
                "Apply for a Loan Online",
                "Integrated Portal with other E-Services",
                "Mobile Responsive",
            ]),
          ],
        [
            'image'=> "voting.png",
            'name'=> "Online Voting System",
            'category'=> "software",
            'description'=>
                "Fast and secured way to cast your votes and readily generate results within a few clicks.",
            'feature'=> json_encode([
                "Stand alone system",
                "Automated Voting System",
                "Faster voting Experience",
                "Able to vote anywhere and anytime",
                "Flexible, Convenient and Secured.",
            ]),
          ],
        [
            'image'=> "que.png",
            'name'=> "Online Queuing System",
            'category'=> "software",
            'description'=>
                "We care for you! To avoid a large crowd, let your client queue anytime anywhere with our Online Queuing System.",
            'feature'=> json_encode([
                "Stand alone system",
                "Members can queue online anytime and anywhere",
                "Can be connected to a Kiosk Terminal",
                "Queuing Monitor with running text announcements and video",
                "Has a dashboard for the Admin",
                "Mobile responsive",
            ]),
          ],
        [
            'image'=> "pos.png",
            'name'=> "Point-of-Sale",
            'category'=> "software",
            'description'=>
                "Meet the most versatile BIR accredited Point-of-Sale System. Make fast and hassle-free store transactions and easily award your customer with its Reward feature.",
            'feature'=> json_encode([
                "Item Maintenance",
                "Receiving/Return",
                "Point of Sale",
                "Inventory",
                "Stocks Warehousing/Transfer",
                "Purchase Order",
                "Supplier Maintenance",
                "Physical Inventory",
                "Ordering System",
            ]),
          ],
      
        [
            'image'=> "online-membership-system.png",
            'name'=> "Online Membership System",
            'category'=> "software",
            'description'=>
                "An easy and convenient way to enroll new members of your cooperative. Allow future clients to fill out application forms, attend webinars and submit documents online via the Online Membership System",
            'feature'=> json_encode([
                "Stand alone System ",
                "Allow online membership application",
                "Allow applicant to upload supporting documents",
                "Alloe applicant to take selfie photo for identification",
                "Capable of uploading video seminar",
                "Applicant will be able to monitor the status of membership application",
                "Capable for sending application updates via E-mail or SMS",
                "Mobile Responsive",
            ]),
          ],
        [
            'image'=> "online-help-desk.png",
            'name'=> "Online Help Desk System",
            'category'=> "software",
            'description'=>
                " Manage your client's concerns by letting them raise and resolve their issues online via our Online Help Desk System",
            'feature'=> json_encode([
                "Allow members to raise issues and concerns with ticket number online ",
                "Capable for sending ticket updates via E-Mail or SMS",
                "Members can reply and upload files on the specific concerns",
                "Members can monitor ticket status",
                "Mobile Responsive",
            ]),
          ],
        [
            'image'=> "coop-wallet.png",
            'name'=> "Coop Wallet",
            'category'=> "software",
            'description'=>
                "A web Application that allows you to check, transfer, save and withdraw your funds.",
            'feature'=> json_encode([
                "Can add/deposit cash",
                "Can WithdrawCash",
                "Can Apply for an Instant Loan",
                "Can be Customized",
                "Mobile Responsive",
            ]),
          ],
        [
            'image'=> "online-payment-gateway.png",
            'name'=> "Online Payment Gateway",
            'category'=> "software",
            'description'=>
                "Allow your members/clients to enjoy their quality time by letting them pay online with our Online Payment Gateway and increase your collection efficiency.",
            'feature'=> json_encode([
                "Easy access to current balances",
                "Secure online payment solutions",
                "Online Banking",
                "Bank Over-the-Counter(OTC)",
                "Over-the-counter Nonbanks/Bayad Centers",
                "Auto posting to current accounts",
                "Mobile Responsive",
            ]),
          ],
        ];

        foreach ($softwareData as $data) {
            DB::table('software')->insert($data);
        }
    }
}