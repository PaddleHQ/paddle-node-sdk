import { Report, ReportFilters } from '../../entities/index.js';
import { type IReportResponse, type IReportFilters } from '../../types/index.js';
import { type ReportFilterName, type ReportType } from '../../enums/index.js';
import { getPaddleTestClient } from '../helpers/test-client.js';
import { ReportsResource } from '../../resources/index.js';
import { Response } from '../../internal/index.js';

describe('Report Filter Names', () => {
  describe('remittance_reference filter', () => {
    test('should support remittance_reference as a valid filter name', () => {
      const filterResponse: IReportFilters = {
        name: 'remittance_reference',
        value: 'PAY-123456',
      };

      const filter = new ReportFilters(filterResponse);

      expect(filter.name).toBe('remittance_reference');
      expect(filter.value).toBe('PAY-123456');
      expect(filter.operator).toBeNull();
    });

    test('should support remittance_reference filter with array values', () => {
      const filterResponse: IReportFilters = {
        name: 'remittance_reference',
        value: ['PAY-123456', 'PAY-789012'],
      };

      const filter = new ReportFilters(filterResponse);

      expect(filter.name).toBe('remittance_reference');
      expect(filter.value).toEqual(['PAY-123456', 'PAY-789012']);
    });

    test('should create report with remittance_reference filter', () => {
      const reportResponse: IReportResponse = {
        id: 'rep_01h7mrm9f6s7s5n5d5q5x5y5z5',
        status: 'ready',
        rows: 50,
        type: 'payout_reconciliation',
        filters: [{ name: 'remittance_reference', value: 'PAY-123456' }],
        created_at: '2024-01-15T10:30:00.00Z',
      };

      const report = new Report(reportResponse);

      expect(report.filters).toHaveLength(1);
      expect(report.filters[0]?.name).toBe('remittance_reference');
    });
  });

  describe('transaction_updated_at filter', () => {
    test('should support transaction_updated_at as a valid filter name with lt operator', () => {
      const filterResponse: IReportFilters = {
        name: 'transaction_updated_at',
        operator: 'lt',
        value: '2024-12-31T23:59:59.00Z',
      };

      const filter = new ReportFilters(filterResponse);

      expect(filter.name).toBe('transaction_updated_at');
      expect(filter.operator).toBe('lt');
      expect(filter.value).toBe('2024-12-31T23:59:59.00Z');
    });

    test('should support transaction_updated_at as a valid filter name with gte operator', () => {
      const filterResponse: IReportFilters = {
        name: 'transaction_updated_at',
        operator: 'gte',
        value: '2024-01-01T00:00:00.00Z',
      };

      const filter = new ReportFilters(filterResponse);

      expect(filter.name).toBe('transaction_updated_at');
      expect(filter.operator).toBe('gte');
      expect(filter.value).toBe('2024-01-01T00:00:00.00Z');
    });

    test('should create report with transaction_updated_at filter', () => {
      const reportResponse: IReportResponse = {
        id: 'rep_01h7mrm9f6s7s5n5d5q5x5y5z5',
        status: 'ready',
        rows: 100,
        type: 'payout_reconciliation',
        filters: [
          { name: 'transaction_updated_at', operator: 'gte', value: '2024-01-01T00:00:00.00Z' },
          { name: 'transaction_updated_at', operator: 'lt', value: '2024-12-31T23:59:59.00Z' },
        ],
        created_at: '2024-01-15T10:30:00.00Z',
      };

      const report = new Report(reportResponse);

      expect(report.filters).toHaveLength(2);
      expect(report.filters[0]?.name).toBe('transaction_updated_at');
      expect(report.filters[0]?.operator).toBe('gte');
      expect(report.filters[1]?.name).toBe('transaction_updated_at');
      expect(report.filters[1]?.operator).toBe('lt');
    });
  });

  describe('combined new filters', () => {
    test('should support both new filter names together in a report', () => {
      const reportResponse: IReportResponse = {
        id: 'rep_01h7mrm9f6s7s5n5d5q5x5y5z5',
        status: 'ready',
        rows: 25,
        type: 'payout_reconciliation',
        filters: [
          { name: 'remittance_reference', value: 'PAY-123456' },
          { name: 'transaction_updated_at', operator: 'gte', value: '2024-01-01T00:00:00.00Z' },
        ],
        created_at: '2024-01-15T10:30:00.00Z',
      };

      const report = new Report(reportResponse);

      expect(report.filters).toHaveLength(2);
      expect(report.filters[0]?.name).toBe('remittance_reference');
      expect(report.filters[1]?.name).toBe('transaction_updated_at');
    });
  });
});

describe('payout_reconciliation Report Type', () => {
  test('should support payout_reconciliation as a valid report type', () => {
    const reportResponse: IReportResponse = {
      id: 'rep_01h7mrm9f6s7s5n5d5q5x5y5z5',
      status: 'ready',
      rows: 500,
      type: 'payout_reconciliation',
      filters: [],
      expires_at: '2024-12-31T23:59:59.00Z',
      created_at: '2024-01-15T10:30:00.00Z',
    };

    const report = new Report(reportResponse);

    expect(report.type).toBe('payout_reconciliation');
    expect(report.id).toBe('rep_01h7mrm9f6s7s5n5d5q5x5y5z5');
    expect(report.status).toBe('ready');
    expect(report.rows).toBe(500);
  });

  test('should create payout_reconciliation report with filters', () => {
    const reportResponse: IReportResponse = {
      id: 'rep_01h7mrm9f6s7s5n5d5q5x5y5z5',
      status: 'pending',
      type: 'payout_reconciliation',
      filters: [
        { name: 'remittance_reference', value: 'PAY-2024-001' },
        { name: 'transaction_updated_at', operator: 'gte', value: '2024-01-01T00:00:00.00Z' },
        { name: 'currency_code', value: 'USD' },
      ],
      created_at: '2024-01-15T10:30:00.00Z',
    };

    const report = new Report(reportResponse);

    expect(report.type).toBe('payout_reconciliation');
    expect(report.filters).toHaveLength(3);
  });

  test('should create payout_reconciliation report via ReportsResource', async () => {
    const paddleInstance = getPaddleTestClient();
    const mockResponse: Response<IReportResponse> = {
      data: {
        id: 'rep_01h7mrm9f6s7s5n5d5q5x5y5z5',
        status: 'pending',
        type: 'payout_reconciliation',
        filters: [{ name: 'remittance_reference', value: 'PAY-123' }],
        created_at: '2024-01-15T10:30:00.00Z',
      },
      meta: { request_id: 'req_123' },
    };

    paddleInstance.post = jest.fn().mockResolvedValue(mockResponse);
    const reportsResource = new ReportsResource(paddleInstance);

    const createdReport = await reportsResource.create({
      type: 'payout_reconciliation',
      filters: [{ name: 'remittance_reference', value: 'PAY-123' }],
    });

    expect(paddleInstance.post).toHaveBeenCalledWith('/reports', {
      type: 'payout_reconciliation',
      filters: [{ name: 'remittance_reference', value: 'PAY-123' }],
    });
    expect(createdReport.type).toBe('payout_reconciliation');
  });
});

describe('Deprecated balance Report Type', () => {
  test('should still support deprecated balance report type for backward compatibility', () => {
    const reportResponse: IReportResponse = {
      id: 'rep_01h7mrm9f6s7s5n5d5q5x5y5z5',
      status: 'ready',
      rows: 100,
      type: 'balance',
      filters: [],
      created_at: '2024-01-15T10:30:00.00Z',
    };

    const report = new Report(reportResponse);

    expect(report.type).toBe('balance');
    expect(report.id).toBe('rep_01h7mrm9f6s7s5n5d5q5x5y5z5');
  });

  test('should create deprecated balance report via ReportsResource', async () => {
    const paddleInstance = getPaddleTestClient();
    const mockResponse: Response<IReportResponse> = {
      data: {
        id: 'rep_01h7mrm9f6s7s5n5d5q5x5y5z5',
        status: 'pending',
        type: 'balance',
        filters: [],
        created_at: '2024-01-15T10:30:00.00Z',
      },
      meta: { request_id: 'req_123' },
    };

    paddleInstance.post = jest.fn().mockResolvedValue(mockResponse);
    const reportsResource = new ReportsResource(paddleInstance);

    const createdReport = await reportsResource.create({
      type: 'balance',
    });

    expect(paddleInstance.post).toHaveBeenCalledWith('/reports', { type: 'balance' });
    expect(createdReport.type).toBe('balance');
  });

  test('payout_reconciliation should be the recommended replacement for balance', () => {
    // This test documents that payout_reconciliation is the recommended type
    const balanceReport: IReportResponse = {
      id: 'rep_balance',
      status: 'ready',
      type: 'balance',
      filters: [],
      created_at: '2024-01-15T10:30:00.00Z',
    };

    const payoutReconciliationReport: IReportResponse = {
      id: 'rep_payout_reconciliation',
      status: 'ready',
      type: 'payout_reconciliation',
      filters: [],
      created_at: '2024-01-15T10:30:00.00Z',
    };

    const balance = new Report(balanceReport);
    const payoutReconciliation = new Report(payoutReconciliationReport);

    // Both types are valid ReportType values
    const validTypes: ReportType[] = ['balance', 'payout_reconciliation'];
    expect(validTypes).toContain(balance.type);
    expect(validTypes).toContain(payoutReconciliation.type);
  });
});

describe('TypeScript Type Safety', () => {
  test('new filter names should be valid ReportFilterName type values', () => {
    const newFilterNames: ReportFilterName[] = ['remittance_reference', 'transaction_updated_at'];

    newFilterNames.forEach((name) => {
      const filter = new ReportFilters({ name, value: 'test' });
      expect(filter.name).toBe(name);
    });
  });

  test('payout_reconciliation should be a valid ReportType value', () => {
    const reportType: ReportType = 'payout_reconciliation';

    const report = new Report({
      id: 'rep_test',
      status: 'ready',
      type: reportType,
      filters: [],
      created_at: '2024-01-15T10:30:00.00Z',
    });

    expect(report.type).toBe('payout_reconciliation');
  });

  test('balance should still be a valid ReportType value (deprecated but supported)', () => {
    const reportType: ReportType = 'balance';

    const report = new Report({
      id: 'rep_test',
      status: 'ready',
      type: reportType,
      filters: [],
      created_at: '2024-01-15T10:30:00.00Z',
    });

    expect(report.type).toBe('balance');
  });
});
