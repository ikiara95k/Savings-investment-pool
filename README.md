# Savings & Investment Pool

React + Vite + Supabase application for tracking member savings and a real pooled investment operation.

## Included
- Member registration/login
- Member dashboard and balances
- Deposit requests and admin approval/rejection
- Withdrawal requests and admin approval/rejection
- Investment/purchase records
- Stock/inventory records
- Sales records with expenses
- Automatic stock-quantity reduction after recorded sales
- Net recorded profit calculation
- Proportional profit distribution based on approved member savings
- Member profit history
- Referral code tracking
- Admin dashboard
- Responsive mobile UI
- Supabase Row Level Security

## Setup
1. Run `supabase/schema.sql` in Supabase SQL Editor.
2. Create your first account.
3. Promote that trusted account to admin using the commented SQL at the bottom of `supabase/schema.sql`.
4. Copy `.env.example` to `.env`.
5. Add the Supabase Project URL and anon/publishable key.
6. Run `npm install`.
7. Run `npm run dev`.

## Admin workflow
1. Approve verified member deposits.
2. Record the actual investment/stock purchase.
3. Add the resulting inventory.
4. Record actual sales and sale expenses.
5. Review the recorded net result.
6. Record a proportional distribution only when there is positive recorded profit.
7. Approve/process withdrawals according to the pool's actual available funds.

The application is designed around genuine savings, documented purchases, actual sales and recorded investment results. It should not be configured to promise fixed returns or to pay members from recruitment deposits.
